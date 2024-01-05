import JSEncrypt from 'jsencrypt';

//密钥对生成 http://web.chacuo.net/netrsakeypair

//从管理端获取 rsa公钥和私钥
//const privateKey = this.$store.getters.rsaPrivateKey;
//const publicKey = this.$store.getters.rsaPublicKey;

const publicKey =
  'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCMqlt2xzwr7fuwJbO63bmRcho/vbm0GCS4pwAzoXYmsJBrpcGS1bYxYpjDNxFgl8SW7H0SWqvSxbppd2zERyMr4M7q3zefuEaGZuG9cRQOEDxjlTbk30FyOtDvA3dSB9Z6L4hO4ZUHidrKNKyg+9/ligccuZrMTUv2Ply+ZFr2GQIDAQAB';

const privateKey =
  'MIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAIyqW3bHPCvt+7Als7rduZFyGj+9ubQYJLinADOhdiawkGulwZLVtjFimMM3EWCXxJbsfRJaq9LFuml3bMRHIyvgzurfN5+4RoZm4b1xFA4QPGOVNuTfQXI60O8Dd1IH1noviE7hlQeJ2so0rKD73+WKBxy5msxNS/Y+XL5kWvYZAgMBAAECgYAIkOtG/XUNm82C+ZjLXWtKjy9ICG7Bp+K8l/bsLf369y+kTpDON1OECGQTJ0xYnIVtR3OKZZknGcFzYMFv5oEeuMLu5ueO2t2NlKZjr6Pp7jfMuQM+S5Y6+BItetMrBlWjEXk/WpPELkqVFTYGNkUNpdpVHHgxCZKyhHdJfVRjLQJBAMvn1WY4Y6/LwhP4WP3jhlKwd6ahgWWBFiApyFhFU4OM9gOX29PAgIQmuMBlP4EjAKC2OWAn687WZM8eTM8kju8CQQCwmmOL9EgAPi+f0pl+00q7D+83IgmOX0YVUc3DuJQiGpnYZzEPjeuIYW0hNH7GSGnTDyR39kaw5Mne/vGTS8t3AkBTiEYD+lXcTrzTMYpDeFIuzdw2hzNbQeauhm9sufncioK+Nhf4R4Renv5Q0ymQ3aYEMKKQocoYkfv6XY9ZzMBBAkAsxngGu+Clbx7T/qk8JoYD935HFDIoDq/OJ/drcBjerK/k1gTyVKEq6sioao7Z5vItuOEeKSqzHs6v4yOMnOLxAkAGhhszHJnCkUzsa+mJ4jXOZliLCnfMph0swkSZKGpgGS6w+BWW0tx3VyGcUQ0RTrqIvJk1yVitDm4UyTLiH8ai';

// 加密
export function encrypt(txt) {
  //const publicKey = _this.$store.getters.rsaPublicKey;
  if (publicKey) {
    const encryptor = new JSEncrypt();
    encryptor.setPublicKey(publicKey); // 设置公钥
    return encryptor.encryptLong2(txt); // 对数据进行加密
  }
  return '';
}

// 解密
export function decrypt(txt) {
  //const privateKey = _this.$store.getters.rsaPrivateKey;
  if (privateKey) {
    const encryptor = new JSEncrypt();
    encryptor.setPrivateKey(privateKey); // 设置私钥
    return encryptor.decryptLong(txt);
  }
  return '';
}

//分段加解密
//https://www.cnblogs.com/WQLong/p/11282596.html
JSEncrypt.prototype.encryptLong = function (d) {
  const k = this.key;
  const maxLength = ((k.n.bitLength() + 7) >> 3) - 11;

  try {
    let lt = '';
    let ct = '';

    if (d.length > maxLength) {
      lt = d.match(/.{1,117}/g);
      lt.forEach(function (entry) {
        const t1 = k.encrypt(entry);
        ct += t1;
      });
      return hex2b64(ct);
    }
    const t = k.encrypt(d);
    return hex2b64(t);
  } catch (ex) {
    return false;
  }
};

JSEncrypt.prototype.encryptLong2 = function (string) {
  const k = this.getKey();
  try {
    let ct = '';
    //RSA每次加密117bytes，需要辅助方法判断字符串截取位置
    //1.获取字符串截取点
    const bytes = [];
    bytes.push(0);
    let byteNo = 0;
    let len, c;
    len = string.length;
    let temp = 0;
    for (let i = 0; i < len; i++) {
      c = string.charCodeAt(i);
      if (c >= 0x010000 && c <= 0x10ffff) {
        byteNo += 4;
      } else if (c >= 0x000800 && c <= 0x00ffff) {
        byteNo += 3;
      } else if (c >= 0x000080 && c <= 0x0007ff) {
        byteNo += 2;
      } else {
        byteNo += 1;
      }
      if (byteNo % 117 >= 114 || byteNo % 117 === 0) {
        if (byteNo - temp >= 114) {
          bytes.push(i);
          temp = byteNo;
        }
      }
    }
    //2.截取字符串并分段加密
    if (bytes.length > 1) {
      for (let i = 0; i < bytes.length - 1; i++) {
        let str;
        if (i === 0) {
          str = string.substring(0, bytes[i + 1] + 1);
        } else {
          str = string.substring(bytes[i] + 1, bytes[i + 1] + 1);
        }
        const t1 = k.encrypt(str);
        ct += t1;
      }
      if (bytes[bytes.length - 1] !== string.length - 1) {
        const lastStr = string.substring(bytes[bytes.length - 1] + 1);
        ct += k.encrypt(lastStr);
      }
      return hex2b64(ct);
    }
    const t = k.encrypt(string);
    return hex2b64(t);
  } catch (ex) {
    return false;
  }
};

JSEncrypt.prototype.decryptLong = function (string) {
  const k = this.key;
  const maxLength = (k.n.bitLength() + 7) >> 3;
  //let maxLength = 128;
  try {
    const str = base64ToHex(string);
    //let b=hex2Bytes(str);
    let ct = '';
    if (str.length > maxLength) {
      const lt = str.match(/.{1,256}/g);
      lt.forEach(function (entry) {
        const t1 = k.decrypt(entry);
        ct += t1;
      });
      return ct;
    }
    return k.decrypt(base64ToHex(string));
  } catch (ex) {
    console.log(ex);
    return false;
  }
};

JSEncrypt.prototype.decryptLong2 = function (string) {
  const k = this.getKey();
  // let maxLength = ((k.n.bitLength()+7)>>3);
  const MAX_DECRYPT_BLOCK = 128;
  try {
    let ct = '';
    let t1;
    let bufTmp;
    let hexTmp;
    const str = base64ToHex(string);
    const buf = hexToBytes(str);
    const inputLen = buf.length;
    //开始长度
    let offSet = 0;
    //结束长度
    let endOffSet = MAX_DECRYPT_BLOCK;

    //分段加密
    while (inputLen - offSet > 0) {
      if (inputLen - offSet > MAX_DECRYPT_BLOCK) {
        bufTmp = buf.slice(offSet, endOffSet);
        hexTmp = bytesToHex(bufTmp);
        t1 = k.decrypt(hexTmp);
        ct += t1;
      } else {
        bufTmp = buf.slice(offSet, inputLen);
        hexTmp = bytesToHex(bufTmp);
        t1 = k.decrypt(hexTmp);
        ct += t1;
      }
      offSet += MAX_DECRYPT_BLOCK;
      endOffSet += MAX_DECRYPT_BLOCK;
    }
    return ct;
  } catch (ex) {
    console.log(ex);
    return false;
  }
};

const b64map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
const b64pad = '=';

function hex2b64(h) {
  let i;
  let c;
  let ret = '';
  for (i = 0; i + 3 <= h.length; i += 3) {
    c = parseInt(h.substring(i, i + 3), 16);
    ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
  }
  if (i + 1 === h.length) {
    c = parseInt(h.substring(i, i + 1), 16);
    ret += b64map.charAt(c << 2);
  } else if (i + 2 === h.length) {
    c = parseInt(h.substring(i, i + 2), 16);
    ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
  }
  while ((ret.length & 3) > 0) ret += b64pad;
  return ret;
}

function hexToBytes(hex) {
  const bytes = [];
  for (let c = 0; c < hex.length; c += 2) bytes.push(parseInt(hex.substring(c, 2), 16));
  return bytes;
}

function bytesToHex(bytes) {
  const hex = [];
  for (let i = 0; i < bytes.length; i++) {
    hex.push((bytes[i] >>> 4).toString(16));
    hex.push((bytes[i] & 0xf).toString(16));
  }
  return hex.join('');
}

function base64ToHex(str) {
  const hex = [],
    bin = atob(str.replace(/[ \r\n]+$/, ''));
  for (let i = 0; i < bin.length; ++i) {
    let tmp = bin.charCodeAt(i).toString(16);
    if (tmp.length === 1) tmp = '0' + tmp;
    hex[hex.length] = tmp;
  }
  return hex.join('');
}
