const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity=1;
      entry.target.style.transform="translateY(0)";
    }
  });
});

sections.forEach(sec=>{
  sec.style.opacity=0;
  sec.style.transform="translateY(30px)";
  sec.style.transition="all 0.8s ease";
  observer.observe(sec);
});

const items = document.querySelectorAll(".service-item");

items.forEach(item=>{
  item.addEventListener("click", ()=>{
    item.classList.toggle("active");
  });
});

