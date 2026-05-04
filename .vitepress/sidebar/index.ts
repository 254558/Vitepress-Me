// docs/.vitepress/sidebar/index.ts
import { vueSidebar } from "./vue";
import { englishSidebar } from "./english";
import { english2Sidebar } from "./english2";
import { english3Sidebar } from "./english3";
import { farmerSidebar } from "./farmer"; 
import { pandasSidebar } from "./pandas"
import { tailwindSidebar } from "./tailwind";

export function getSidebar() {
  return [
    vueSidebar, 
    englishSidebar, 
    english2Sidebar, 
    english3Sidebar,
    farmerSidebar,
    pandasSidebar,
    tailwindSidebar
  ];
}