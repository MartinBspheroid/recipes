import{c as n,a as l,t as c}from"./disclose-version.CBfss8Iz.js";import"./legacy.BK3TcawQ.js";import{D as m,I as f,J as d,F as u,j as _,ay as h}from"./runtime.Cm2mmJvP.js";import{s as g}from"./render.yK5H4VNt.js";import{i as v}from"./if.V3sxPUvl.js";var b=c("<pre> </pre>");function k(s){var a=n(),r=m(a);{var i=e=>{var t=b();const o=h(()=>`
    <script module>
    const modules = import.meta.glob("./**.svelte");

    const links = Object.keys(modules)
      .filter((file) => file.includes("+page.svelte"))
      .map((file) => {
        const parts = file.split("/");
        // Determine the title
        const title = parts.length > 2 ? parts[parts.length - 2] : "Home";
        // Generate the link
        const path = file.replace("./", "").replace("+page.svelte", "");
        return { title, link: path };
      });
    <\/script>

    {#each links as item}
          <li class="flex w-full h-full justify-center items-center">
            <a class="text-center text-xl font-bold" href={"/{item.link}"}
              >{item.title}</a
            >
          </li>
    {/each}
`);var p=f(t);d(t),u(()=>g(p,`
    ${_(o)??""}
`)),l(e,t)};v(r,e=>{e(i)})}l(s,a)}const S=Object.freeze(Object.defineProperty({__proto__:null,default:k},Symbol.toStringTag,{value:"Module"}));export{k as _,S as a};
