(window.webpackJsonp=window.webpackJsonp||[]).push([[486],{1496:function(e,t,r){"use strict";r.r(t);var o=r(26),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"cron"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cron"}},[e._v("#")]),e._v(" Cron")]),e._v(" "),r("p",[e._v("The Cron node is useful to schedule the workflows to run periodically at fixed dates, times, or intervals. This works in a similar way to the "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cron",target:"_blank",rel:"noopener noreferrer"}},[e._v("cron"),r("OutboundLink")],1),e._v(" software utility in Unix-like systems. This core node is a Trigger node.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("💡 Keep in mind")]),e._v(" "),r("ol",[r("li",[e._v("If a workflow is using the Cron node as a trigger, make sure that you save and activate the workflow.")]),e._v(" "),r("li",[e._v("Make sure that the timezone is set correctly for the n8n instance (or the workflow).")])])]),e._v(" "),r("p",[e._v("You can find the example usage of the Cron node in the "),r("RouterLink",{attrs:{to:"/getting-started/create-your-first-workflow/create-your-first-workflow/"}},[e._v("Create Your First Workflow")]),e._v(" guide.")],1),e._v(" "),r("h2",{attrs:{id:"node-reference"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#node-reference"}},[e._v("#")]),e._v(" Node Reference")]),e._v(" "),r("p",[e._v("You can configure the node by clicking on the "),r("em",[e._v("Add Cron Time")]),e._v(" button under the "),r("em",[e._v("Trigger Times")]),e._v(" section. There are a couple of different options available for the "),r("em",[e._v("Mode")]),e._v(" field in the form of a dropdownlist.")]),e._v(" "),r("ul",[r("li",[e._v("Mode\n"),r("ul",[r("li",[e._v("Every Minute")]),e._v(" "),r("li",[e._v("Every Hour")]),e._v(" "),r("li",[e._v("Every Day")]),e._v(" "),r("li",[e._v("Every Week")]),e._v(" "),r("li",[e._v("Every Month")]),e._v(" "),r("li",[e._v("Every X")]),e._v(" "),r("li",[e._v("Custom")])])])]),e._v(" "),r("p",[e._v("The 'Every X' option allows you to specify the workflow to be triggered every x minutes or hours. You can specify x by entering a number in the "),r("em",[e._v("Value")]),e._v(" field. The 'Custom' option allows you to enter a custom "),r("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cron#CRON_expression",target:"_blank",rel:"noopener noreferrer"}},[e._v("cron expression"),r("OutboundLink")],1),e._v(" in the "),r("em",[e._v("Cron Expression")]),e._v(" field.")]),e._v(" "),r("h2",{attrs:{id:"faqs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),r("h3",{attrs:{id:"how-to-generate-a-custom-cron-expression"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-to-generate-a-custom-cron-expression"}},[e._v("#")]),e._v(" How to generate a custom Cron expression?")]),e._v(" "),r("p",[e._v("To generate a Cron expression, you can use "),r("a",{attrs:{href:"https://crontab.guru",target:"_blank",rel:"noopener noreferrer"}},[e._v("crontab guru"),r("OutboundLink")],1),e._v(". Paste the Cron expression that you generated using crontab guru in the "),r("em",[r("strong",[e._v("Cron Expression")])]),e._v(" field in n8n.")]),e._v(" "),r("h3",{attrs:{id:"why-there-are-six-asterisks-in-the-cron-expression"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#why-there-are-six-asterisks-in-the-cron-expression"}},[e._v("#")]),e._v(" Why there are six asterisks (*) in the Cron Expression?")]),e._v(" "),r("p",[e._v("The sixth asterisk in the Cron Expression represents seconds. Setting this is optional. The node will execute even if you don't set the value for seconds.")]),e._v(" "),r("table",[r("thead",[r("tr",[r("th",[e._v("*")]),e._v(" "),r("th",[e._v("*")]),e._v(" "),r("th",[e._v("*")]),e._v(" "),r("th",[e._v("*")]),e._v(" "),r("th",[e._v("*")]),e._v(" "),r("th",[e._v("*")])])]),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("second")]),e._v(" "),r("td",[e._v("minute")]),e._v(" "),r("td",[e._v("hour")]),e._v(" "),r("td",[e._v("day")]),e._v(" "),r("td",[e._v("week")]),e._v(" "),r("td",[e._v("month")])])])]),e._v(" "),r("p",[e._v("If you want to trigger your workflow, for example, every day at 04:08:30, enter the following in the "),r("em",[r("strong",[e._v("Cron Expression")])]),e._v(" field.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("30 8 4 * * *\n")])])]),r("p",[e._v("If you want to trigger your workflow, for example, every day at 04:08, enter the following in the "),r("em",[r("strong",[e._v("Cron Expression")])]),e._v(" field.")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("8 4 * * *\n")])])]),r("h2",{attrs:{id:"further-reading"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),r("FurtherReadingBlog",{attrs:{node:"Cron"}})],1)}),[],!1,null,null,null);t.default=n.exports}}]);