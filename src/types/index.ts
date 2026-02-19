// 定义平台类型
export type platForm =
  | "spotify"
  | "apple"
  | "netease"
  | "bilibili"
  | "bandcamp";

// 定义单个连接结构
interface MusicLink {
  platform: platForm;
  url: string;
}

// 定义音乐作品数据结构
export interface MusicProject {
  title: string;
  year: string;
  description: string;
  links: MusicLink[];
}
