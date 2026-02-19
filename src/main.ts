import { myMusicProjects } from "./data/musicData";
import { PLATFORM_ICONS } from "./data/icon";
import { MusicProject } from "./types/index";

const musiclistContainer = document.getElementById("music-list-container");

if (musiclistContainer) {
  const htmlContent = myMusicProjects
    .map((project: MusicProject) => {
      const linkContent = project.links
        .map((MusicLink) => {
          const svgPath = PLATFORM_ICONS[MusicLink.platform];
          return `
            <a href="${MusicLink.url}" 
            class="platform-icon" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Listen on ${MusicLink.platform}">
              <svg viewBox="0 0 24 24">
              ${svgPath}
              </svg>
            </a>
            `;
        })
        .join("");
      return `
        <div class="track-item">
        <!-- 左边：文字信息 -->
        <div class="track-left">
        <span class="track-year">${project.year}</span>
          <div class="track-meta">
            <b>${project.title}</b>
            <span class="track-genre">${project.description}</span>
          </div>
        </div>
    
        <!-- 右边：刚才生成的图标按钮串 -->
        <div class="track-right">
          ${linkContent} 
        </div>
  </div>
        `;
    })
    .join("");

  musiclistContainer.innerHTML = htmlContent;
}
