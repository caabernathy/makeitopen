(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(a),b=n,u=h["".concat(i,".").concat(b)]||h[b]||d[b]||r;return a?o.a.createElement(u,s(s({ref:t},p),{},{components:a})):o.a.createElement(u,s({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},59:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),o=a(6),r=(a(0),a(101)),i={id:"1-1-planning",title:"Planning The App",sidebar_label:"Part 1: Planning The App",permalink:"/tutorials/building-the-f8-app/planning/",original_id:"1-1-planning"},s={unversionedId:"1-1-planning",id:"version-2016.1.1.0/1-1-planning",isDocsHomePage:!1,title:"Planning The App",description:"This is a series of tutorials designed to introduce React Native and its Open Source ecosystem in plain English, written alongside the building of the F8 2016 app for Android and iOS.",source:"@site/versioned_docs/version-2016.1.1.0/1-1-planning.md",slug:"/1-1-planning",permalink:"/makeitopen/docs/2016.1.1.0/1-1-planning",editUrl:"https://github.com/facebook/makeitopen/edit/master/docs/versioned_docs/version-2016.1.1.0/1-1-planning.md",version:"2016.1.1.0",lastUpdatedBy:"Christine Abernathy",lastUpdatedAt:1604512976,sidebar_label:"Part 1: Planning The App",sidebar:"version-2016.1.1.0/docs",next:{title:"Designing an App for Multiple Platforms",permalink:"/makeitopen/docs/2016.1.1.0/1-2-design"}},c=[{value:"Switching to React Native",id:"switching-to-react-native",children:[]},{value:"Choosing a Data Layer",id:"choosing-a-data-layer",children:[]},{value:"Data Access with React Native",id:"data-access-with-react-native",children:[]},{value:"Our Development Stack",id:"our-development-stack",children:[]}],p={rightToc:c};function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"This is a series of tutorials designed to introduce React Native and its Open Source ecosystem in plain English, written alongside the building of the F8 2016 app for ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://play.google.com/store/apps/details?id=com.facebook.f8"}),"Android")," and ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"https://itunes.apple.com/us/app/f8/id853467066"}),"iOS"),".")),Object(r.b)("p",null,"In this first part, we're going to talk about how we planned the app; in later parts we will share sample code, discuss multi-platform design considerations, analyze the data layer in our app, and explain our testing strategy."),Object(r.b)("h3",{id:"switching-to-react-native"},"Switching to React Native"),Object(r.b)("p",null,"In 2015 the F8 iOS app was built using React Native, but the Android version used native code; in previous years both were built using native iOS and Android code. Since then, React Native has been released for Android, which presented an opportunity to cut the surface area of the app's logic and UI code. Some Facebook teams have seen ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://code.facebook.com/posts/1189117404435352/react-native-for-android-how-we-built-the-first-cross-platform-react-native-app/"}),"around 85% re-use of app code")," when using React Native."),Object(r.b)("p",null,"React Native also provides the benefit of being able to quickly prototype visual components in a tight loop with UI designers - something we'll discuss in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/makeitopen/docs/2016.1.1.0/1-2-design"}),"part two"),"."),Object(r.b)("p",null,"So, if we've switched to React Native, what else do we need to consider? Let's start with the content."),Object(r.b)("h3",{id:"choosing-a-data-layer"},"Choosing a Data Layer"),Object(r.b)("p",null,"The 2014 and 2015 apps both used ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://parse.com/"}),"Parse Cloud Code")," as a data backend. Therefore when beginning to plan the 2016 app, Parse had the advantage by allowing re-use of existing data structures and getting started quickly."),Object(r.b)("p",null,"There were other reasons for using Parse - much of the content displayed within the app needs to be updated with great frequency, up to and including during the conference itself, and it needs to be updatable without requiring any technical expertise (beyond familiarity with spreadsheet editing, for example). The Parse Cloud Code dashboard was the perfect tool to meet these needs."),Object(r.b)("p",null,"Given all this, Parse became the best choice for this app's data backend. In light of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://blog.parse.com/announcements/moving-on/"}),"Parse Cloud Code shutdown announcement"),", we decided to transition to use the newly open-sourced ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://blog.parse.com/announcements/introducing-parse-server-and-the-database-migration-tool/"}),"Parse Server")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ParsePlatform/parse-dashboard"}),"Parse Dashboard")," projects."),Object(r.b)("p",null,"As React Native doesn't need to be tightly connected to a data layer, for example development of the UI and app logic in a React Native app can be done with simple mock data. This means that as long as the structure of the data remains the same, you can swap the data source of a fully built app with minimal amounts of adjustment. For the F8 App this meant we could very easily transition from Parse Cloud Code to the open source Parse Server after the app had already been developed. We'll cover this more in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/makeitopen/docs/2016.1.1.0/1-3-data"}),"data tutorial"),"."),Object(r.b)("h3",{id:"data-access-with-react-native"},"Data Access with React Native"),Object(r.b)("p",null,"To get Parse and React Native working together, there is an existing ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/ParsePlatform/ParseReact"}),"Parse + React package")," that provides the necessary binding tools, but there was a problem - due to the vagaries of conference wi-fi and connectivity, the F8 app must be able to work offline. Since Parse + React did not support offline syncing of data when the F8 app was being built, so we had to construct our own offline support."),Object(r.b)("p",null,"There was another factor in making this decision - team size. Relay, for example, would be more appropriate for a larger team working at scale, but the F8 app was being developed by one person, with a few others in support for design. This has a big influence on the type of data access method you use in an app."),Object(r.b)("p",null,"What about ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"http://graphql.org/"}),"GraphQL")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/relay/"}),"Relay"),"? While they work extremely well with React Native, Relay did not (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/facebook/relay/wiki/Roadmap#in-progress"}),"at the time"),") have built-in support for offline usage, and GraphQL wasn't supported out of the box by Parse. Building the app using them would have required building APIs for GraphQL-Parse, and hacking together an offline storage method for Relay."),Object(r.b)("p",null,"GraphQL server setup was also relatively complex for one person with a short deadline. Bearing in mind that when the app was being developed for release in the app stores, we wanted the simplest and fastest options, what other choices were there?"),Object(r.b)("p",null,"Given the above, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/rackt/redux"}),"Redux")," was the best choice for the app. Redux offers a simple implementation of the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://facebook.github.io/flux/"}),"Flux architecture"),", providing more control over how the data can be stored and cached, essentially enabling the app to sync one-way from Parse Cloud."),Object(r.b)("p",null,"For the app's store version, Redux provided the best balance of functionality and ease of use for this app. After the app was released, we revisited this and built some usage of Relay and GraphQL into parts of the app, and we'll cover that transition in the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"tutorials/building-the-f8-app/relay/"}),"Relay and GraphQL Addendum"),"."),Object(r.b)("h3",{id:"our-development-stack"},"Our Development Stack"),Object(r.b)("p",null,"With React Native as our chosen app framework, and Redux used for the data layer, we needed to pick some supporting technologies and tools:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The open-sourced ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/ParsePlatform/parse-server"}),"Parse Server")," provided data storage - running on ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/en/"}),"Node.js"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://flowtype.org/"}),"Flow")," was enabled to catch typing errors in our React Native JavaScript code."),Object(r.b)("li",{parentName:"ul"},"Unit tests for the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://facebook.github.io/jest/"}),"Jest framework")," were written for more complex functions."),Object(r.b)("li",{parentName:"ul"},"We used the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/facebook/react-native-fbsdk"}),"React Native Facebook SDK")," for quick iOS and Android access to Facebook integration."),Object(r.b)("li",{parentName:"ul"},"We used Facebook's ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://nuclide.io/"}),"Nuclide")," editor on OSX with its ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"http://nuclide.io/docs/platforms/react-native/"}),"built-in support for React Native"),"."),Object(r.b)("li",{parentName:"ul"},"We used git for version control, and stored progress on ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/fbsamples/f8app"}),"GitHub"),".")),Object(r.b)("p",null,"There are some additional small packages we used that we'll highlight as we go through each tutorial."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Before you continue with later sections, we recommend you learn the basics about ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"http://facebook.github.io/react/docs/tutorial.html"}),"React.js from the project's own tutorial")," - specifically its ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"http://facebook.github.io/react/docs/thinking-in-react.html#step-1-break-the-ui-into-a-component-hierarchy"}),"concept of modular components")," and ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"http://facebook.github.io/react/docs/jsx-in-depth.html"}),"JSX syntax"),". Then ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"http://facebook.github.io/react-native/docs/tutorial.html#content"}),"follow React Native's introductory tutorial")," which will show you the basics about applying this to mobile apps.")))}l.isMDXComponent=!0}}]);