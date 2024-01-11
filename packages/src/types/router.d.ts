import { RouteRecordRaw, _RouteRecordBase } from 'vue-router';

declare module 'vue-router' {
  type RouteOption = {
    path: string;
    hidden?: boolean;
    permissions?: string[];
    roles?: string[];
    component?: any;
    children?: RouteOption[];
    alwaysShow?: boolean;
    parentPath?: string;
    isIcon?: item.isIcon;
    meta?: {
      title: string;
      icon: string;
      expertAffix?: boolean;
    };
    query?: string;
  } & RouteRecordRaw;

  interface _RouteRecordBase {
    hidden?: boolean;
  }

  interface _RouteLocationBase {
    children?: RouteOption[];
  }

  interface RouteLocationOptions {
    fullPath?: string;
    path?: string;
  }

  interface TagView extends Partial<_RouteLocationBase> {
    title?: string;
    meta?: {
      link?: string;
      title?: string;
      affix?: boolean;
      expertAffix?: boolean;
      noCache?: boolean;
      keepAlive?: boolean;
    };
  }
}
