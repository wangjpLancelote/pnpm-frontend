import { deepClone } from "./utils";
import { useSelectOptionsRender, useLabelKey, useValueKey, useOptions, useDisabled } from "./hooks";
import { defineComponent, h, useSlots } from "vue";
import { commonSearchComponent, commonSearchReactive } from "./instance";

export default defineComponent({
  name: "formRender",
  props: {
    tag: {
      // 组件标签
      type: [String, Function, Object],
      required: true
    },
    prop: {
      // 组件字段
      type: String,
      required: true
    },
    label: {
      // 组件label
      type: String
    },
    props: {
      //单层组件属性
      type: Object,
      default: () => {}
    },
    events: {
      type: Object,
      default: () => {}
    },
    dict: {
      type: String
    },
    style: {
      type: Object,
      default: () => {}
    },
    renderSlot: {
      type: Function
    }
  },
  setup(props, context) {
    const slots = useSlots();
    const attrs = context.attrs;
    const { nativeOn, directives, key, ref } = attrs;
    const disabled = useDisabled(props.props);
    const { tag, props: nativeProps, events, renderSlot } = unref(props);
    // hack时间选择器的值处理
    if (tag === "el-date-picker" && nativeProps?.type === "date" && typeof attrs.value === "number") {
      attrs.value = attrs.value + "";
    }
    const attrProps = deepClone(props.props || {});
    delete attrProps.style;
    delete attrProps.type; // 删除type，解决按钮的type传入attrs会导致点击按钮刷新浏览器问题
    const newConfigProps = Object.assign({ clearable: true, dict: props.dict }, props.props || {});
    const renderData = {
      class: attrs.class || newConfigProps.class || "",
      style: { width: "100%", ...(attrs.staticStyle || {}), ...newConfigProps.style },
      props: { ...newConfigProps, disabled },
      // domProps,
      // attrs: { ...attrs, ...attrProps },
      // on: { ...(attrs.on || {}), ...events },
      nativeOn,
      directives,
      slots,
      key: newConfigProps.key || key,
      ref: newConfigProps.ref ? newConfigProps.ref : ref,
      scopedSlots: () => {},
      ...newConfigProps,
      ...attrs
    };
    const selectOptions: Array<any> = useOptions(newConfigProps);
    const compseComponent: any = {
      "el-select": {
        default: () => useSelectOptionsRender(selectOptions, newConfigProps, (events || {}).optionClick)
      },
      "el-checkbox-group": {
        default: () => {
          return selectOptions.map((item) => {
            const valueKey = useValueKey(newConfigProps);
            const labelKey = useLabelKey(newConfigProps);
            return h(
              "el-checkbox",
              {
                props: {
                  label: item[valueKey],
                  ...newConfigProps.children
                },
                style: {
                  "margin-right": 0
                }
              },
              item[labelKey]
            );
          });
        }
      },
      "el-radio-group": {
        default: () =>
          selectOptions.map((item) => {
            const valueKey = useValueKey(newConfigProps);
            const labelKey = useLabelKey(newConfigProps);
            return h(
              "el-radio",
              {
                props: {
                  label: item[valueKey],
                  ...newConfigProps.children
                },
                style: {
                  "margin-right": 0
                }
              },
              item[labelKey]
            );
          })
      },
      "el-input": {
        default: () => {
          const subElement = [];
          const keys = Object.keys(slots);
          for (const iterator of keys) {
            if (slots[iterator]) {
              const appendElement = h("div" as string, { slot: `${iterator}` }, [slots[iterator]] as any);
              subElement.push(appendElement);
            }
          }
          return subElement;
        }
      }
    };
    // 处理el-input的slot
    // let elInputPretend = tag === 'el-input' || tag === 'el-input-number' ? [compseComponent['el-input'].default()] : null;
    let elInputPretend: Array<any> | null | unknown = compseComponent[tag as string];
    if (["el-input", "el-input-number"].includes(tag as string) && !compseComponent[tag as string].default().length) {
      elInputPretend = null;
    }
    if (renderSlot) {
      elInputPretend = [renderSlot(h, context)];
    } else {
      renderData.scopedSlots = typeof tag === "string" ? compseComponent[tag as string] : "";
      renderData.slots = compseComponent[tag as string];
    }
    let component = tag;

    /** 这里的type不一定是string，需要处理传入组件V-Component的情况 */
    if (typeof tag === "string" && ~commonSearchComponent.indexOf(tag)) {
      const dom: any = shallowReactive(commonSearchReactive);
      component = dom[tag];
    }
    return () => h(component as any, renderData, elInputPretend || (attrs.children as any));
  }
});
