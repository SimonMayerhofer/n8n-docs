(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{1066:function(e,t,o){e.exports=o.p+"assets/img/workflow.3df2e13f.png"},1067:function(e,t,o){e.exports=o.p+"assets/img/Snowflake_node.782204f0.png"},1068:function(e,t,o){e.exports=o.p+"assets/img/Set_node.df848be0.png"},1069:function(e,t,o){e.exports=o.p+"assets/img/Snowflake1_node.4aee85fe.png"},1070:function(e,t,o){e.exports=o.p+"assets/img/Set1_node.9836769f.png"},1071:function(e,t,o){e.exports=o.p+"assets/img/Snowflake2_node.17dc413d.png"},1679:function(e,t,o){"use strict";o.r(t);var n=o(26),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"snowflake"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#snowflake"}},[e._v("#")]),e._v(" Snowflake")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://snowflake.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Snowflake"),n("OutboundLink")],1),e._v(" is a cloud data platform that provides a data warehouse-as-a-service designed for the cloud.")]),e._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),n("p",[e._v("You can find authentication information for this node "),n("RouterLink",{attrs:{to:"/nodes/credentials/Snowflake/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),n("h2",{attrs:{id:"basic-operations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),n("ul",[n("li",[e._v("Execute an SQL query")]),e._v(" "),n("li",[e._v("Insert rows in a database")]),e._v(" "),n("li",[e._v("Update rows in a database")])]),e._v(" "),n("h2",{attrs:{id:"example-usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),n("p",[e._v("This workflow allows you to create a table, insert, and update data in a table in Snowflake. You can also find the "),n("a",{attrs:{href:"https://n8n.io/workflows/824",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),n("OutboundLink")],1),e._v(" on n8n.io. This example usage workflow would use the following nodes.")]),e._v(" "),n("ul",[n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),n("li",[n("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Set/"}},[e._v("Set")])],1),e._v(" "),n("li",[n("a",{attrs:{href:""}},[e._v("Snowflake")])])]),e._v(" "),n("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1066),alt:"A workflow with the Snowflake node"}})]),e._v(" "),n("h3",{attrs:{id:"_1-start-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),n("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),n("h3",{attrs:{id:"_2-snowflake-node-execute-query"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-snowflake-node-execute-query"}},[e._v("#")]),e._v(" 2. Snowflake node (Execute Query)")]),e._v(" "),n("p",[e._v("This node will create a table named "),n("code",[e._v("docs")]),e._v(" with "),n("code",[e._v("id")]),e._v(" and "),n("code",[e._v("name")]),e._v(" columns.")]),e._v(" "),n("ol",[n("li",[e._v("First of all, you'll have to enter credentials for the Snowflake node. You can find out how to do that "),n("RouterLink",{attrs:{to:"/nodes/credentials/Snowflake/"}},[e._v("here")]),e._v(".")],1),e._v(" "),n("li",[e._v("Select 'Execute Query' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Enter the following SQL query in the "),n("em",[n("strong",[e._v("Query")])]),e._v(" field: "),n("code",[e._v("CREATE TABLE docs (id INT, name STRING);")]),e._v(".")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])]),e._v(" "),n("p",[e._v("In the screenshot below, you will notice that the node creates a table named "),n("code",[e._v("docs")]),e._v(" in Snowflake.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1067),alt:"Using the Snowflake node to create a table"}})]),e._v(" "),n("h3",{attrs:{id:"_3-set-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-set-node"}},[e._v("#")]),e._v(" 3. Set node")]),e._v(" "),n("p",[e._v("We will use the Set node to set the values for the id and name columns for a new record.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("id")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter an id in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter the value for the name in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Keep Only Set")])]),e._v(" to "),n("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sets the value for "),n("code",[e._v("id")]),e._v(" and "),n("code",[e._v("name")]),e._v(".")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1068),alt:"Using the Set node to set data to be inserted by the Snowflake node"}})]),e._v(" "),n("h3",{attrs:{id:"_4-snowflake1-node-insert"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-snowflake1-node-insert"}},[e._v("#")]),e._v(" 4. Snowflake1 node (Insert)")]),e._v(" "),n("p",[e._v("This node will insert the data that we set in the previous node into the "),n("code",[e._v("docs")]),e._v(" table in Snowflake.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous Snowflake node.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("docs")]),e._v(" in the "),n("em",[n("strong",[e._v("Table")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("id, name")]),e._v(" in the "),n("em",[n("strong",[e._v("Columns")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node inserts the data in the table that we created using the Snowflake node.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1069),alt:"Using the Snowflake node to insert data into a table"}})]),e._v(" "),n("h3",{attrs:{id:"_5-set1-node"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-set1-node"}},[e._v("#")]),e._v(" 5. Set1 node")]),e._v(" "),n("p",[e._v("We will use the Set node to ensure that only the data that we set in this node gets passed on to the next nodes in the workflow. We will set the value of "),n("code",[e._v("name")]),e._v(" in this node.")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'Number' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("id")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("1")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on the "),n("em",[n("strong",[e._v("Add Value")])]),e._v(" button and select 'String' from the dropdown list.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("name")]),e._v(" in the "),n("em",[n("strong",[e._v("Name")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("nodemation")]),e._v(" in the "),n("em",[n("strong",[e._v("Value")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Toggle "),n("em",[n("strong",[e._v("Keep Only Set")])]),e._v(" to "),n("code",[e._v("true")]),e._v(". We set this option to true to ensure that only the data that we have set in this node get passed on to the next nodes in the workflow.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node sets the value of "),n("code",[e._v("name")]),e._v(". This value is passed to the next node in the workflow.")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1070),alt:"Using the Set node to set data to be updated by the Snowflake node"}})]),e._v(" "),n("h3",{attrs:{id:"_6-snowflake2-node-update"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-snowflake2-node-update"}},[e._v("#")]),e._v(" 6. Snowflake2 node (Update)")]),e._v(" "),n("p",[e._v("This node will update the value of the "),n("code",[e._v("name")]),e._v(" column for the id "),n("code",[e._v("1")]),e._v(".")]),e._v(" "),n("div",{pre:!0},[n("ol",[n("li",[e._v("Select the credentials that you entered in the previous Snowflake node.")]),e._v(" "),n("li",[e._v("Select 'Update' from the "),n("em",[n("strong",[e._v("Operation")])]),e._v(" dropdown list.")]),e._v(" "),n("li",[e._v("Click on the gears icon next to the "),n("em",[n("strong",[e._v("Table")])]),e._v(" field and click on "),n("em",[n("strong",[e._v("Add Expression")])]),e._v(".")]),e._v(" "),n("li",[e._v("Select the following in the "),n("em",[n("strong",[e._v("Variable Selector")])]),e._v(" section: Nodes > Snowflake1 > Parameters > table. You can also add the following expression: "),n("code",[e._v('{{$node["Snowflake1"].parameter["table"]}}')]),e._v(".")]),e._v(" "),n("li",[e._v("Enter "),n("code",[e._v("name")]),e._v(" in the "),n("em",[n("strong",[e._v("Columns")])]),e._v(" field.")]),e._v(" "),n("li",[e._v("Click on "),n("em",[n("strong",[e._v("Execute Node")])]),e._v(" to run the node.")])])]),n("p",[e._v("In the screenshot below, you will notice that the node updates the value of the name field for the record with id "),n("code",[e._v("1")]),e._v(".")]),e._v(" "),n("p",[n("img",{attrs:{src:o(1071),alt:"Using the Snowflake node to update data"}})])])}),[],!1,null,null,null);t.default=a.exports}}]);