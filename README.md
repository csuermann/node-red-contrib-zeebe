# node-red-contrib-zeebe

Zeebe nodes for Node-RED

This module leverages the [zeebe-node](https://creditsenseau.github.io/zeebe-client-node-js/index.html) client library to bring Zeebe awesomeness to Node-RED!

### worker

![task-worker node](docs/worker.png)

Creates a task worker and subscribes to specific tasks/jobs. This node outputs a Node-RED message for each newly received task/job.

### complete

![complete-task node](docs/complete.png)

When a Node-RED message is received at the input, this node completes a specific Zeebe task/job (with either success or failure).

### pub msg

![publish-message node](docs/pub-msg.png)

When a Node-RED message is received at the input, this node publishes a message to Zeebe.

### pub start msg

![publish-start-message node](docs/pub-start-msg.png)

When a Node-RED message is received at the input, this node publishes a start message to Zeebe. No correlation key needed.

### create wfi

![workflow-instance node](docs/create-wfi.png)

When a Node-RED message is received at the input, a new workflow instance gets started in Zeebe. Once the workflow instance has been created, the output sends a Node-RED message containing some meta-info, i.e. the workflowInstanceKey.
