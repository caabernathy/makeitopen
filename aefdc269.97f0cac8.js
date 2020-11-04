(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||b[u]||o;return n?i.a.createElement(h,r(r({ref:t},l),{},{components:n})):i.a.createElement(h,r({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var l=2;l<o;l++)s[l]=n[l];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},107:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/iOS_vs_Android_Segmented_Controls@3x-7178eb5696bc1a373124b7a5a63866b2.png"},116:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/iOS_vs_Android@3x-f71eac5952262e602923409dd0d21080.png"},117:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/button-playground-497d556b1b7e8533d17f1f3d8c4ef481.gif"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(6),o=(n(0),n(101)),s={id:"1-2-design",title:"Designing an App for Multiple Platforms",sidebar_label:"Part 2: Designing an App for Multiple Platforms"},r={unversionedId:"1-2-design",id:"1-2-design",isDocsHomePage:!1,title:"Designing an App for Multiple Platforms",description:"This is a series of tutorials designed to introduce React Native and its Open Source ecosystem in plain English, written alongside the building of the F8 2016 app for Android and iOS.",source:"@site/docs/1-2-design.md",slug:"/1-2-design",permalink:"/makeitopen/docs/next/1-2-design",editUrl:"https://github.com/facebook/makeitopen/edit/master/docs/docs/1-2-design.md",version:"current",lastUpdatedBy:"Christine Abernathy",lastUpdatedAt:1604512976,sidebar_label:"Part 2: Designing an App for Multiple Platforms",sidebar:"docs",previous:{title:"Planning The App",permalink:"/makeitopen/docs/next/1-1-planning"},next:{title:"Integrating Data with React Native",permalink:"/makeitopen/docs/next/1-3-data"}},c=[{value:"The React Native Mindset",id:"the-react-native-mindset",children:[]},{value:"Varying Smaller Components",id:"varying-smaller-components",children:[]},{value:"Separating Complex Differences",id:"separating-complex-differences",children:[]},{value:"The Design Iteration Cycle",id:"the-design-iteration-cycle",children:[]}],l={rightToc:c};function p(e){var t=e.components,s=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"This is a series of tutorials designed to introduce React Native and its Open Source ecosystem in plain English, written alongside the building of the F8 2016 app for Android and iOS.")),Object(o.b)("p",null,"One of the major highlights of React Native is its simplicity around creating apps that can run on iOS and Android, without having to repeat most of the app logic in different native languages."),Object(o.b)("p",null,'However, rather than "write once, run anywhere", the philosophy of React Native has always been "learn once, write anywhere". This subtle difference means that React Native apps should be tailored for each platform, rather than being identical everywhere.'),Object(o.b)("p",null,"Platforms can have somewhat different visual styles, UI paradigms, or even technical capabilities. Thus, it makes sense to start with a common UI foundation, and then tweak it for each platform."),Object(o.b)("h4",{id:"before-we-start"},"Before We Start"),Object(o.b)("p",null,"In this and subsequent tutorials, we're going to be diving into the code of the app itself, so you should ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/fbsamples/f8app"}),"grab the source code")," and clone it somewhere you can conveniently browse. You could also follow ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"tutorials/building-the-f8-app/local-setup/"}),"our setup instructions")," to use this to run the app yourself locally, but for the purposes of this tutorial, you just need to see the source code itself."),Object(o.b)("h3",{id:"the-react-native-mindset"},"The React Native Mindset"),Object(o.b)("p",null,"Before you write any React code, there is a very important concept about it that instructs how you think about every piece of a React app. This concept is that ",Object(o.b)("strong",{parentName:"p"},"your code should re-use as much as possible"),"."),Object(o.b)("p",null,"This might seem at odds with the React ",Object(o.b)("em",{parentName:"p"},"Native")," idea of tailoring the app visually for each platform - where the temptation might be to create separate iOS and Android visual components - but it simply requires that the various parts of the React Native app still share as much overlap as possible."),Object(o.b)("p",null,'When considering visual components in a React Native app, the key to success is to use platform abstractions. The developer and the designer determine a list of re-usable components in the app - such as "button", "container", "list row", "header", etc. - and only where needed do these components deviate from the common version.'),Object(o.b)("p",null,"Of course, some components are more complex than others, so let's explore some different components in the F8 app."),Object(o.b)("h3",{id:"varying-smaller-components"},"Varying Smaller Components"),Object(o.b)("p",null,"Here is an example from the F8 app:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"iOS and Android Segmented Controls Comparison",src:n(107).default})),Object(o.b)("p",null,"On iOS, the tab segmentation controls use a rounded button style familiar to iOS users, while the Android version of the same component uses an underline style that better matches that platform. Both controls, however, perform the exact same function."),Object(o.b)("p",null,"So, visually they're a little bit different, but otherwise it's worth repeating that they should ",Object(o.b)("strong",{parentName:"p"},"re-use as much code as possible"),"."),Object(o.b)("p",null,"For a small component like this, we have a large amount of cross-platform overlap in the logic involved - it is a component which displays text buttons, each with 'hover' and 'active' styles, and the only difference is that slight visual variation - and so the best approach is to use a single component, and then use control statements when necessary."),Object(o.b)("p",null,"Here's the above component as an example (from ",Object(o.b)("inlineCode",{parentName:"p"},"<F8SegmentedControl>"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* from js/common/F8SegmentedControl.js */\nclass Segment extends React.Component {\n  props: {\n    value: string;\n    isSelected: boolean;\n    selectionColor: string;\n    onPress: () => void;\n  };\n\nrender() {\n    var selectedButtonStyle;\n    if (this.props.isSelected) {\n      selectedButtonStyle = { borderColor: this.props.selectionColor };\n    }\n    var deselectedLabelStyle;\n    if (!this.props.isSelected && Platform.OS === 'android') {\n      deselectedLabelStyle = styles.deselectedLabel;\n    }\n    var title = this.props.value && this.props.value.toUpperCase();\n\n    var accessibilityTraits = ['button'];\n    if (this.props.isSelected) {\n      accessibilityTraits.push('selected');\n    }\n\n    return (\n      <TouchableOpacity\n        accessibilityTraits={accessibilityTraits}\n        activeOpacity={0.8}\n        onPress={this.props.onPress}\n        style={[styles.button, selectedButtonStyle]}>\n        <Text style={[styles.label, deselectedLabelStyle]}>\n          {title}\n        </Text>\n      </TouchableOpacity>\n    );\n  }\n}\n")),Object(o.b)("p",null,"Here we're simply applying different styles depending on which platform the code runs (using React Native's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/platform-specific-code.html#platform-module"}),"Platform module"),"). Both tab buttons receive some common styles, but then they diverge (again from ",Object(o.b)("inlineCode",{parentName:"p"},"<F8SegmentedControl>"),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* from js/common/F8SegmentedControl.js */\nvar styles = F8StyleSheet.create({\n  container: {\n    flexDirection: 'row',\n    backgroundColor: 'transparent',\n    ios: {\n      paddingBottom: 6,\n      justifyContent: 'center',\n      alignItems: 'center',\n    },\n    android: {\n      paddingLeft: 60,\n    },\n  },\n  button: {\n    borderColor: 'transparent',\n    alignItems: 'center',\n    justifyContent: 'center',\n    backgroundColor: 'transparent',\n    ios: {\n      height: HEIGHT,\n      paddingHorizontal: 20,\n      borderRadius: HEIGHT / 2,\n      borderWidth: 1,\n    },\n    android: {\n      paddingBottom: 6,\n      paddingHorizontal: 10,\n      borderBottomWidth: 3,\n      marginRight: 10,\n    },\n  },\n  label: {\n    letterSpacing: 1,\n    fontSize: 12,\n    color: 'white',\n  },\n  deselectedLabel: {\n    color: 'rgba(255, 255, 255, 0.7)',\n  },\n});\n")),Object(o.b)("p",null,"Here we're using an adapted version of the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/stylesheet.html"}),"React Native ",Object(o.b)("inlineCode",{parentName:"a"},"StyleSheet")," API")," that we've wrapped with some addition platform specific switching:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export function create(styles: Object): {[name: string]: number} {\n  const platformStyles = {};\n  Object.keys(styles).forEach((name) => {\n    let {ios, android, ...style} = {...styles[name]};\n    if (ios && Platform.OS === 'ios') {\n      style = {...style, ...ios};\n    }\n    if (android && Platform.OS === 'android') {\n      style = {...style, ...android};\n    }\n    platformStyles[name] = style;\n  });\n  return StyleSheet.create(platformStyles);\n}\n")),Object(o.b)("p",null,"In this ",Object(o.b)("inlineCode",{parentName:"p"},"F8StyleSheet")," function we parse a supplied object (the ",Object(o.b)("inlineCode",{parentName:"p"},"styles")," object from the previous code sample), and if we find a key called ",Object(o.b)("inlineCode",{parentName:"p"},"ios")," or ",Object(o.b)("inlineCode",{parentName:"p"},"android")," which matches the current platform the app is running on, we use those styles, otherwise they're ignored. This gives us another simple example of the React idea of reducing code duplication by reusing as much of the common styling code as possible."),Object(o.b)("p",null,"So now, we can reuse this component in the app, and it will use appropriate styles for iOS or Android."),Object(o.b)("h3",{id:"separating-complex-differences"},"Separating Complex Differences"),Object(o.b)("p",null,"When both platform implementations of a component share less logic and deviate in more than just appearance, we need a different approach. The example here is of the top-level menu navigation in the app:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"iOS and Android Main Navigation Comparison",src:n(116).default})),Object(o.b)("p",null,"As you can see, the iOS version uses fixed tabs at the bottom of the screen, whereas the Android version implements a hamburger-type menu with a slide out nav. There are significant differences in terms of extra animation, styling, and even menu items themselves. The Android app, for example, might contain more nav menu options, such as a logout option."),Object(o.b)("p",null,"You ",Object(o.b)("em",{parentName:"p"},"could")," continue to use a single component for all of this, but that component's logic would be full of a large number of control statements, and it would rapidly become very difficult to understand."),Object(o.b)("p",null,"Instead, we can take advantage of React Native's built-in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/platform-specific-code.html#platform-specific-extensions"}),"Platform specific extensions"),". This lets us create two separate components, in this case one named ",Object(o.b)("inlineCode",{parentName:"p"},"F8TabsView.ios.js"),", and another named ",Object(o.b)("inlineCode",{parentName:"p"},"F8TabsView.android.js")," - React Native will auto-detect and load the correct component for each platform based on this extension naming."),Object(o.b)("h4",{id:"built-in-ui-components"},"Built-in UI Components"),Object(o.b)("p",null,"Within each ",Object(o.b)("inlineCode",{parentName:"p"},"FBTabsView")," component, we can also reuse some built-in React Native UI elements. The Android version uses ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/drawerlayoutandroid.html"}),Object(o.b)("inlineCode",{parentName:"a"},"DrawerLayoutAndroid"))," (which, as you can tell by the component name, is only available in Android apps):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'/* from js/tabs/F8TabsView.android.js */\nrender() {\n  return (\n    <DrawerLayoutAndroid\n      ref="drawer"\n      drawerWidth={300}\n      drawerPosition={DrawerLayoutAndroid.positions.Left}\n      renderNavigationView={this.renderNavigationView}>\n      <View style={styles.content} key={this.props.activeTab}>\n        {this.renderContent()}\n      </View>\n    </DrawerLayoutAndroid>\n  );\n}\n')),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"renderNavigationView")," prop passed into ",Object(o.b)("inlineCode",{parentName:"p"},"DrawerLayoutAndroid")," tells that component to look for a ",Object(o.b)("inlineCode",{parentName:"p"},"renderNavigationView()")," function in the current class. This function should return the content that will be rendered inside of the 'open' drawer. In this case, we're going to render a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/scrollview.html"}),Object(o.b)("inlineCode",{parentName:"a"},"ScrollView"))," component, filled with custom ",Object(o.b)("inlineCode",{parentName:"p"},"MenuItem")," components (see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/fbsamples/f8app/blob/master/js/tabs/MenuItem.js"}),Object(o.b)("inlineCode",{parentName:"a"},"MenuItem.js")),"):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* from js/tabs/F8TabsView.android.js */\nrenderNavigationView() {\n  ...\n  return(\n    <ScrollView style={styles.drawer}>\n      <MenuItem\n        title=\"Schedule\"\n        selected={this.props.activeTab === 'schedule'}\n        onPress={this.onTabSelect.bind(this, 'schedule')}\n        icon={scheduleIcon}\n        selectedIcon={scheduleIconSelected}\n      />\n      <MenuItem\n        title=\"My F8\"\n        selected={this.props.activeTab === 'my-schedule'}\n        onPress={this.onTabSelect.bind(this, 'my-schedule')}\n        icon={require('./schedule/img/my-schedule-icon.png')}\n        selectedIcon={require('./schedule/img/my-schedule-icon-active.png')}\n      />\n      <MenuItem\n        title=\"Map\"\n        selected={this.props.activeTab === 'map'}\n        onPress={this.onTabSelect.bind(this, 'map')}\n        icon={require('./maps/img/maps-icon.png')}\n        selectedIcon={require('./maps/img/maps-icon-active.png')}\n      />\n      <MenuItem\n        title=\"Notifications\"\n        selected={this.props.activeTab === 'notifications'}\n        onPress={this.onTabSelect.bind(this, 'notifications')}\n        badge={this.state.notificationsBadge}\n        icon={require('./notifications/img/notifications-icon.png')}\n        selectedIcon={require('./notifications/img/notifications-icon-active.png')}\n      />\n      <MenuItem\n        title=\"Info\"\n        selected={this.props.activeTab === 'info'}\n        onPress={this.onTabSelect.bind(this, 'info')}\n        icon={require('./info/img/info-icon.png')}\n        selectedIcon={require('./info/img/info-icon-active.png')}\n      />\n    </ScrollView>\n  );\n}\n")),Object(o.b)("p",null,"By comparison the iOS version uses a different built-in component directly in the ",Object(o.b)("inlineCode",{parentName:"p"},"render()")," function, ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/tabbarios.html"}),Object(o.b)("inlineCode",{parentName:"a"},"TabBarIOS")),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* from js/tabs/F8TabsView.ios.js */\nrender() {\n  var scheduleIcon = this.props.day === 1\n    ? require('./schedule/img/schedule-icon-1.png')\n    : require('./schedule/img/schedule-icon-2.png');\n  var scheduleIconSelected = this.props.day === 1\n    ? require('./schedule/img/schedule-icon-1-active.png')\n    : require('./schedule/img/schedule-icon-2-active.png');\n  return (\n    <TabBarIOS tintColor={F8Colors.darkText}>\n      <TabBarItemIOS\n        title=\"Schedule\"\n        selected={this.props.activeTab === 'schedule'}\n        onPress={this.onTabSelect.bind(this, 'schedule')}\n        icon={scheduleIcon}\n        selectedIcon={scheduleIconSelected}>\n        <GeneralScheduleView\n          navigator={this.props.navigator}\n          onDayChange={this.handleDayChange}\n        />\n      </TabBarItemIOS>\n      <TabBarItemIOS\n        title=\"My F8\"\n        selected={this.props.activeTab === 'my-schedule'}\n        onPress={this.onTabSelect.bind(this, 'my-schedule')}\n        icon={require('./schedule/img/my-schedule-icon.png')}\n        selectedIcon={require('./schedule/img/my-schedule-icon-active.png')}>\n        <MyScheduleView\n          navigator={this.props.navigator}\n          onJumpToSchedule={() => this.props.onTabSelect('schedule')}\n        />\n      </TabBarItemIOS>\n      <TabBarItemIOS\n        title=\"Map\"\n        selected={this.props.activeTab === 'map'}\n        onPress={this.onTabSelect.bind(this, 'map')}\n        icon={require('./maps/img/maps-icon.png')}\n        selectedIcon={require('./maps/img/maps-icon-active.png')}>\n        <F8MapView />\n      </TabBarItemIOS>\n      <TabBarItemIOS\n        title=\"Notifications\"\n        selected={this.props.activeTab === 'notifications'}\n        onPress={this.onTabSelect.bind(this, 'notifications')}\n        badge={this.state.notificationsBadge}\n        icon={require('./notifications/img/notifications-icon.png')}\n        selectedIcon={require('./notifications/img/notifications-icon-active.png')}>\n        <F8NotificationsView navigator={this.props.navigator} />\n      </TabBarItemIOS>\n      <TabBarItemIOS\n        title=\"Info\"\n        selected={this.props.activeTab === 'info'}\n        onPress={this.onTabSelect.bind(this, 'info')}\n        icon={require('./info/img/info-icon.png')}\n        selectedIcon={require('./info/img/info-icon-active.png')}>\n        <F8InfoView navigator={this.props.navigator} />\n      </TabBarItemIOS>\n    </TabBarIOS>\n  );\n}\n")),Object(o.b)("p",null,"You can see that although the iOS menu takes much of the same data, it has a slightly different structure. Instead of a separate function to create the menu items, they are inserted as children of the parent menu, as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/tabbarios-item.html#content"}),Object(o.b)("inlineCode",{parentName:"a"},"TabBarItemIOS"))," components."),Object(o.b)("p",null,"These ",Object(o.b)("inlineCode",{parentName:"p"},"TabBarItem"),"s are essentially equivalent to the Android ",Object(o.b)("inlineCode",{parentName:"p"},"MenuItem")," components - the difference being that in the Android component we defined a single main ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/view.html#content"}),Object(o.b)("inlineCode",{parentName:"a"},"View")," component"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<View style={styles.content} key={this.props.activeTab}>\n  {this.renderContent()}\n</View>\n")),Object(o.b)("p",null,"and change it whenever a tab change occurs (using the ",Object(o.b)("inlineCode",{parentName:"p"},"renderContent()")," function), while the iOS component has multiple separate ",Object(o.b)("inlineCode",{parentName:"p"},"View")," components, for example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"<GeneralScheduleView\n  navigator={this.props.navigator}\n  onDayChange={this.handleDayChange}\n/>\n")),Object(o.b)("p",null,"that are part of the ",Object(o.b)("inlineCode",{parentName:"p"},"TabBarItem")," that is tapped to make them visible."),Object(o.b)("h3",{id:"the-design-iteration-cycle"},"The Design Iteration Cycle"),Object(o.b)("p",null,"When you're building any kind of app, mobile or web, it can be painful to quickly tweak and adjust UI elements. If an engineer and designer are working together, this can slow the whole process down."),Object(o.b)("p",null,"React Native contains a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/debugging.html#live-reload"}),"live reload")," debugging feature which triggers a refresh of the app anytime the JavaScript is changed. This can cut down on the design iteration process - make changes to a component's style, then save, and you'll see the changes instantly."),Object(o.b)("p",null,"But what about a component that looks different under multiple conditions? For example, a button component might have a default style, but also styles for tapped, busy doing a task, completed a task, etc."),Object(o.b)("p",null,"To avoid having to interact with the app each time, we built in a visual debugging ",Object(o.b)("inlineCode",{parentName:"p"},"Playground")," component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* from js/Playground.js */\nclass Playground extends React.Component {\n  constructor(props) {\n    super(props);\n    const content = [];\n    const define = (name: string, render: Function) => {\n      content.push(<Example key={name} render={render} />);\n    };\n\n    var AddToScheduleButton = require('./tabs/schedule/AddToScheduleButton');\n    AddToScheduleButton.__cards__(define);\n    this.state = {content};\n  }\n\n  render() {\n    return (\n      <View style={{paddingTop: 20}}>\n        {this.state.content}\n      </View>\n    );\n  }\n}\n")),Object(o.b)("p",null,"This simply creates an empty view that can be swapped in to load instead of the actual app. When we combine this with some example definitions in one of the UI components, in this case ",Object(o.b)("inlineCode",{parentName:"p"},"AddToScheduleButton.js"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* from js/tabs/schedule/AddToScheduleButton.js */\nmodule.exports.__cards__ = (define) => {\n  let f;\n  setInterval(() => f && f(), 1000);\n\n  define('Inactive', (state = true, update) =>\n    <AddToScheduleButton isAdded={state} onPress={() => update(!state)} />);\n\n  define('Active', (state = false, update) =>\n    <AddToScheduleButton isAdded={state} onPress={() => update(!state)} />);\n\n  define('Animated', (state = false, update) => {\n    f = () => update(!state);\n    return <AddToScheduleButton isAdded={state} />;\n  });\n};\n")),Object(o.b)("p",null,"we can turn the app into a UI preview tool:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"UI preview playground in action with a button and three different states",src:n(117).default})),Object(o.b)("p",null,"The examples defined for this button contain the pressed and not pressed states, and a third example which cycles back and forth between the two, in order to preview any transition animations."),Object(o.b)("p",null,"This lets us really quickly tweak the visual style of basic components while working literally side-by-side with a designer."),Object(o.b)("p",null,"If you want to make use of this, the ",Object(o.b)("inlineCode",{parentName:"p"},"<Playground>")," component should be re-usable in any React Native app. To enable it, all we have to do is swap a bit of code in our ",Object(o.b)("inlineCode",{parentName:"p"},"setup()")," function to load the ",Object(o.b)("inlineCode",{parentName:"p"},"<Playground>")," rather than the actual app:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* from js/setup.js */\nrender() {\n  ...\n  return (\n    <Provider store={this.state.store}>\n      <F8App />\n    </Provider>\n  );\n}\n")),Object(o.b)("p",null,"becomes"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"/* in js/setup.js */\nrender() {\n  ...\n  return (\n    <Provider store={this.state.store}>\n      <Playground />\n    </Provider>\n  );\n}\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"<Playground>")," component itself can be modified to change which other component is being imported within it."))}p.isMDXComponent=!0}}]);