import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  aboutUsNavItem: HTMLElement | null = null;
  educationNavItem: HTMLElement | null = null;
  projectsNavItem: HTMLElement | null = null;
  eventsNavItem: HTMLElement | null = null;
  campusNavItem: HTMLElement | null = null;

  ngOnInit(): void {
    this.aboutUsNavItem = document.getElementById("about-us");
    this.educationNavItem = document.getElementById("education");
    this.projectsNavItem = document.getElementById("projects");
    this.eventsNavItem = document.getElementById("events");
    this.campusNavItem = document.getElementById("campus-life")

    if (this.aboutUsNavItem) {
      this.aboutUsNavItem.addEventListener("mouseenter", () => {
        this.aboutUsNavItem!.classList.add("hover");
      });

      this.aboutUsNavItem.addEventListener("mouseleave", () => {
        this.aboutUsNavItem!.classList.remove("hover");
      });
    }

    if (this.educationNavItem) {
      this.educationNavItem.addEventListener("mouseenter", () => {
        this.educationNavItem!.classList.add("hover");
      });

      this.educationNavItem.addEventListener("mouseleave", () => {
        this.educationNavItem!.classList.remove("hover");
      });
    }

    if (this.projectsNavItem) {
      this.projectsNavItem.addEventListener("mouseenter", () => {
        this.projectsNavItem!.classList.add("hover");
      });

      this.projectsNavItem.addEventListener("mouseleave", () => {
        this.projectsNavItem!.classList.remove("hover");
      });
    }

    if (this.eventsNavItem) {
      this.eventsNavItem.addEventListener("mouseenter", () => {
        this.eventsNavItem!.classList.add("hover");
      });

      this.eventsNavItem.addEventListener("mouseleave", () => {
        this.eventsNavItem!.classList.remove("hover");
      });
    }
    if (this.campusNavItem) {
      this.campusNavItem.addEventListener("mouseenter", () => {
        this.campusNavItem!.classList.add("hover");
      });

      this.campusNavItem.addEventListener("mouseleave", () => {
        this.campusNavItem!.classList.remove("hover");
      });
    }
  }


  isScrolled = false;

  @HostListener("window:scroll", [])
  onScroll(): void {
    const header = document.querySelector(".header") as HTMLElement;
    const navbar = document.querySelector(".navbar") as HTMLElement;
    if (window.pageYOffset > header.clientHeight) {
      this.isScrolled = true;
      header.classList.add("scrolled");
      navbar.classList.add("scrolled");
    } else {
      this.isScrolled = false;
      header.classList.remove("scrolled");
      navbar.classList.remove("scrolled");
    }
  }


}


