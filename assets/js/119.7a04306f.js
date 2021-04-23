(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1531:function(t,e,s){"use strict";s.r(e);var a=s(26),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"apitemplate-io"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apitemplate-io"}},[t._v("#")]),t._v(" APITemplate.io")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://apitemplate.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("APITemplate.io"),a("OutboundLink")],1),t._v(" allows you to auto-generate images and PDF documents.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("🔑 Credentials")]),t._v(" "),a("p",[t._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/APITemplateIo/"}},[t._v("here")]),t._v(".")],1)]),t._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[t._v("#")]),t._v(" Basic Operations")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Account")]),t._v(" "),a("ul",[a("li",[t._v("Get")])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Image")]),t._v(" "),a("ul",[a("li",[t._v("Create")])])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("PDF")]),t._v(" "),a("ul",[a("li",[t._v("Create")])])]),t._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[t._v("#")]),t._v(" Example Usage")]),t._v(" "),a("p",[t._v("This workflow allows you to create an invoice with the information received via a Typeform submission. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/989",target:"_blank",rel:"noopener noreferrer"}},[t._v("workflow"),a("OutboundLink")],1),t._v(" on n8n.io. This example usage workflow would use the following nodes.")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/TypeformTrigger/"}},[t._v("Typeform Trigger")])],1),t._v(" "),a("li",[a("a",{attrs:{href:""}},[t._v("APITemplate.io")])])]),t._v(" "),a("p",[t._v("The final workflow should look like the following image.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(645),alt:"A workflow with the APITemplate.io node"}})]),t._v(" "),a("h3",{attrs:{id:"_1-typeform-trigger-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-typeform-trigger-node"}},[t._v("#")]),t._v(" 1. Typeform Trigger node")]),t._v(" "),a("p",[t._v("This node will trigger the workflow when a form is submitted. Make sure to create a form that collects the following information:")]),t._v(" "),a("ul",[a("li",[t._v("Bill To (Short Text)")]),t._v(" "),a("li",[t._v("Client's Email Address (Email)")]),t._v(" "),a("li",[t._v("Item Description (Short Text)")]),t._v(" "),a("li",[t._v("Item Price (Number)")]),t._v(" "),a("li",[t._v("Item Description (Short Text)")]),t._v(" "),a("li",[t._v("Item Price (Number)")])]),t._v(" "),a("ol",[a("li",[t._v("Select 'Access Token' from the "),a("em",[a("strong",[t._v("Authentication")])]),t._v(" dropdown list.")]),t._v(" "),a("li",[t._v("Enter the credentials for the Typeform Trigger node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Typeform/"}},[t._v("here")]),t._v(".")],1),t._v(" "),a("li",[t._v("Select the invoice form from the "),a("em",[a("strong",[t._v("Form")])]),t._v(" dropdown list.")]),t._v(" "),a("li",[t._v("Toggle "),a("em",[a("strong",[t._v("Simplify Answers")])]),t._v(" to "),a("code",[t._v("false")]),t._v(". By setting this option to false, the node returns the values for the fields with duplicate names.")]),t._v(" "),a("li",[t._v("Click on "),a("em",[a("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),a("p",[t._v("In the screenshot below, you will notice that the node triggers the workflow when the form is submitted. We will pass this information to the next nodes in the workflow.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(646),alt:"Using the Typeform Trigger node to trigger the workflow when a form is submitted"}})]),t._v(" "),a("h3",{attrs:{id:"_2-apitemplate-io-node-create-pdf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-apitemplate-io-node-create-pdf"}},[t._v("#")]),t._v(" 2. APITemplate.io node (create: pdf)")]),t._v(" "),a("p",[t._v("This node will generate an invoice using the information from the previous node. Create an invoice template in APITemplate.io, if you don't already have one.")]),t._v(" "),a("ol",[a("li",[t._v("First of all, you'll have to enter credentials for the APITemplate.io node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/APITemplateIo/"}},[t._v("here")]),t._v(".")],1),t._v(" "),a("li",[t._v("Select 'PDF' from the "),a("em",[a("strong",[t._v("Resource")])]),t._v(" dropdown list.")]),t._v(" "),a("li",[t._v("Select your invoice template from the "),a("em",[a("strong",[t._v("Template ID")])]),t._v(" dropdown list.")]),t._v(" "),a("li",[t._v("Toggle "),a("em",[a("strong",[t._v("JSON Parameters")])]),t._v(" to "),a("code",[t._v("true")]),t._v(". By setting this option to true, the node allows us to write custom JSON data.")]),t._v(" "),a("li",[t._v("Toggle "),a("em",[a("strong",[t._v("Download")])]),t._v(" to "),a("code",[t._v("true")]),t._v(".")]),t._v(" "),a("li",[t._v("Click on the gears icon next to the "),a("em",[a("strong",[t._v("Properties (JSON)")])]),t._v(" field.")]),t._v(" "),a("li",[t._v("Enter the following expression in the "),a("em",[a("strong",[t._v("Edit Expression")])]),t._v(" field:")])]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"company"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"n8n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"email"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{$json["')]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]["')]),t._v("email"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]}}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"invoice_no"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"213223444"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"invoice_date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"18-03-2021"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"invoice_due_date"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"17-04-2021"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Berlin, Germany"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"company_bill_to"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{$json["')]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]["')]),t._v("text"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]}}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"website"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://n8n.io"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"document_id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"889856789012"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"items"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"item_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{$json["')]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]["')]),t._v("text"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]}}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EUR {{$json["')]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]["')]),t._v("number"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]}}"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"item_name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{{$json["')]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]["')]),t._v("text"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]}}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"price"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"EUR {{$json["')]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]["')]),t._v("number"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]}}"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ol",{attrs:{start:"8"}},[a("li",[t._v("Click on the "),a("em",[a("strong",[t._v("Add Field")])]),t._v(" button.")]),t._v(" "),a("li",[t._v("Enter a file name in the "),a("em",[a("strong",[t._v("File Name")])]),t._v(" field.")]),t._v(" "),a("li",[t._v("Click on "),a("em",[a("strong",[t._v("Execute Node")])]),t._v(" to run the node.")])]),t._v(" "),a("p",[t._v("In the screenshot below, you will notice that the node creates an invoice using the data from the previous node.")]),t._v(" "),a("p",[a("img",{attrs:{src:s(647),alt:"Using the APITemplate.io node to create an invoice"}})]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("💡 Activate workflow for production")]),t._v(" "),a("p",[t._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Typeform Trigger node.")])])])}),[],!1,null,null,null);e.default=r.exports},645:function(t,e,s){t.exports=s.p+"assets/img/workflow.c7cc63a4.png"},646:function(t,e,s){t.exports=s.p+"assets/img/TypeformTrigger_node.ff2f1a15.png"},647:function(t,e,s){t.exports=s.p+"assets/img/APITemplate.io_node.5835839e.png"}}]);