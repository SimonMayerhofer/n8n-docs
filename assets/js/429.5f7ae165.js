(window.webpackJsonp=window.webpackJsonp||[]).push([[429],{1341:function(e,t,n){"use strict";n.r(t);var i=n(26),r=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"clickup"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#clickup"}},[e._v("#")]),e._v(" ClickUp")]),e._v(" "),n("p",[e._v("You can use these credentials to authenticate the following nodes with ClickUp.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/nodes/ClickUp/"}},[e._v("ClickUp")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/ClickUpTrigger/"}},[e._v("ClickUp Trigger")])],1)]),e._v(" "),n("h2",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),n("p",[e._v("Create a "),n("a",{attrs:{href:"https://www.clickup.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ClickUp"),n("OutboundLink")],1),e._v(" account.")]),e._v(" "),n("h2",{attrs:{id:"using-oauth"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-oauth"}},[e._v("#")]),e._v(" Using OAuth")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("⛅️ Note for n8n.cloud users")]),e._v(" "),n("p",[e._v("You'll only need to enter the Credentials Name and click on the circle button in the OAuth section to connect your ClickUp account to n8n.")])]),e._v(" "),n("ol",[n("li",[e._v("Open your ClickUp "),n("a",{attrs:{href:"https://app.clickup.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("dashboard"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("Click on your profile icon in the bottom left.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Integrations")])]),e._v(" under your workspace profile.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("ClickUp API")])]),e._v(".")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("+ Create an App")])]),e._v(" button under the "),n("em",[n("strong",[e._v("ClikcUp API")])]),e._v(" section.")]),e._v(" "),n("li",[e._v("Enter the name of your app in the "),n("em",[n("strong",[e._v("App Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Copy the 'OAuth Callback URL' provided in the 'ClickUp OAuth2 API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Paste it in the "),n("em",[n("strong",[e._v("Redirect URL(s)")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Create App")])]),e._v(" button.")]),e._v(" "),n("li",[e._v("Copy the displayed client ID.")]),e._v(" "),n("li",[e._v("Enter a name for your credentials in the "),n("em",[n("strong",[e._v("Credentials Name")])]),e._v(" field in the 'ClickUp OAuth2 API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Paste the client ID in the "),n("em",[n("strong",[e._v("Client ID")])]),e._v(" field in the 'ClickUp OAuth2 API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Copy the client secret from ClickUp.")]),e._v(" "),n("li",[e._v("Paste the client secret in the "),n("em",[n("strong",[e._v("Client Secret")])]),e._v(" field in the 'ClickUp OAuth2 API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Click on the circle button in the OAuth section to connect a ClickUp account to n8n.")]),e._v(" "),n("li",[e._v("Click the "),n("em",[n("strong",[e._v("Save")])]),e._v(" button to save your credentials in n8n.")])]),e._v(" "),n("p",[e._v("The following video demonstrates the steps mentioned above.")]),e._v(" "),n("div",{staticClass:"video-container"},[n("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed/jPD0p8n-Ddk",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),n("p",[e._v("The following video demonstrates the steps to authenticate the ClickUp node on "),n("a",{attrs:{href:"https://n8n.cloud",target:"_blank",rel:"noopener noreferrer"}},[e._v("n8n.cloud"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("div",{staticClass:"video-container"},[n("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed/1CjF_cPNSzM",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})]),e._v(" "),n("h2",{attrs:{id:"using-access-token"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-access-token"}},[e._v("#")]),e._v(" Using Access Token")]),e._v(" "),n("ol",[n("li",[e._v("Open the ClickUp "),n("a",{attrs:{href:"https://app.clickup.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("dashboard"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("li",[e._v("Click on your profile icon in the bottom left.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Apps")])]),e._v(" under your user profile.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Generate")])]),e._v(" button under the "),n("em",[n("strong",[e._v("API Token")])]),e._v(" section.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Copy")])]),e._v(" button to copy the token.")]),e._v(" "),n("li",[e._v("Enter a name for your credentials in the "),n("em",[n("strong",[e._v("Credentials Name")])]),e._v(" field in the 'ClickUp API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Paste the token in the "),n("em",[n("strong",[e._v("Access Token")])]),e._v(" field in the 'ClickUp API' credentials in n8n.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Create")])]),e._v(" button to create the credentials.")])]),e._v(" "),n("div",{staticClass:"video-container"},[n("iframe",{attrs:{width:"840",height:"472.5",src:"https://www.youtube.com/embed/FMc8uiFT-Eo",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])}),[],!1,null,null,null);t.default=r.exports}}]);