(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{1548:function(e,t,o){"use strict";o.r(t);var a=o(26),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"beeminder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#beeminder"}},[e._v("#")]),e._v(" Beeminder")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.beeminder.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Beeminder"),a("OutboundLink")],1),e._v(" is a service that helps you to self-track and stick to your goals.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),a("p",[e._v("You can find authentication information for this node "),a("RouterLink",{attrs:{to:"/nodes/credentials/Beeminder/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),a("h2",{attrs:{id:"basic-operations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[e._v("Datapoint")]),e._v(" "),a("ul",[a("li",[e._v("Create datapoint for a goal")]),e._v(" "),a("li",[e._v("Delete a datapoint")]),e._v(" "),a("li",[e._v("Get all datapoints for a goal")]),e._v(" "),a("li",[e._v("Update a datapoint")])])]),e._v(" "),a("h2",{attrs:{id:"example-usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),a("p",[e._v("This workflow allows you to add a datapoint to Beeminder when a new activity gets added to Strava. You can also find the "),a("a",{attrs:{href:"https://n8n.io/workflows/900",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),a("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/nodes/nodes-library/trigger-nodes/StravaTrigger/"}},[e._v("Strava Trigger")])],1),e._v(" "),a("li",[a("a",{attrs:{href:""}},[e._v("Beeminder")])])]),e._v(" "),a("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(686),alt:"A workflow with the Beeminder node"}})]),e._v(" "),a("h3",{attrs:{id:"_1-strava-trigger-node"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-strava-trigger-node"}},[e._v("#")]),e._v(" 1. Strava Trigger node")]),e._v(" "),a("p",[e._v("This node will trigger the workflow whenever a new activity gets added to your Strava account.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Strava Trigger node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Strava/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select 'created' from the "),a("em",[a("strong",[e._v("Event")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node triggers the workflow when a new activity gets added to Strava.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(687),alt:"Using the Strava Trigger node to trigger the workflow"}})]),e._v(" "),a("h3",{attrs:{id:"_2-beeminder-node-create-datapoint"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-beeminder-node-create-datapoint"}},[e._v("#")]),e._v(" 2. Beeminder node (create: datapoint)")]),e._v(" "),a("p",[e._v("This node will create a datapoint for the goal "),a("code",[e._v("testing")]),e._v(". If you have created a goal with a different name, select that goal instead.")]),e._v(" "),a("ol",[a("li",[e._v("First of all, you'll have to enter credentials for the Beeminder node. You can find out how to do that "),a("RouterLink",{attrs:{to:"/nodes/credentials/Beeminder/"}},[e._v("here")]),e._v(".")],1),e._v(" "),a("li",[e._v("Select a goal from the "),a("em",[a("strong",[e._v("Goal Name")])]),e._v(" dropdown list.")]),e._v(" "),a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Add Field")])]),e._v(" and select 'Comment'.")]),e._v(" "),a("li",[e._v("Click on the gears icon next to the "),a("em",[a("strong",[e._v("Comment")])]),e._v(" field and click on "),a("em",[a("strong",[e._v("Add Expression")])]),e._v(".")])]),e._v(" "),a("div",{pre:!0},[a("ol",{pre:!0,attrs:{start:"5"}},[a("li",[e._v("Select the following in the "),a("em",[a("strong",[e._v("Variable Selector")])]),e._v(" section: Current Node > Input Data > JSON > object_data > name. You can also add the following expression: "),a("code",[e._v('{{$json["object_data"]["name"]}}')]),e._v(".")])])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Click on "),a("em",[a("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),a("p",[e._v("In the screenshot below, you will notice that the node creates a datapoint in Beeminder.")]),e._v(" "),a("p",[a("img",{attrs:{src:o(688),alt:"Using the Beeminder node to create a datapoint for a goal"}})]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("💡 Activate workflow for production")]),e._v(" "),a("p",[e._v("You'll need to save the workflow and then click on the Activate toggle on the top right of the screen to activate the workflow. Your workflow will then be triggered as specified by the settings in the Strava Trigger node.")])])])}),[],!1,null,null,null);t.default=r.exports},686:function(e,t,o){e.exports=o.p+"assets/img/workflow.7f33bbb6.png"},687:function(e,t,o){e.exports=o.p+"assets/img/StravaTrigger_node.14e56157.png"},688:function(e,t,o){e.exports=o.p+"assets/img/Beeminder_node.ac328934.png"}}]);