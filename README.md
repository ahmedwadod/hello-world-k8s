# hello-world-nodejs
This is a sample hello world web NodeJs app that will show the hostname of the current device/container.
It uses only built-in NodeJs modules for simplicty.

# Purpose
This simple app is intended to be used in Kubernetes cluster to demonstrate when the response is fetched from different pods.

# Usage
## On Local Machine
1- To run on port `8080` do `$ node app.js` in the terminal
2- Or you can provide your own port in the environment variable `NODEJS_PORT`
    Ex: `$ env NODEJS_PORT=5000 node app.js`

## Kubernetes Deployment (Local)
In the file `deployment.yaml` you will find a Kubernetes deployment that will spin up this app with `3 replicas` and one `load balancer`.

To run this in your k8s cluster follow these steps:
1- Add the External IP for the load balancer in the `deployment.yaml` file by replacing the `###.###.###.###` under `externalIPs` with the actual IP you want to use.
2- Using `kubectl` run `$ kubectl apply -f deployment.yaml`

# License
This project is licensed under the `MIT License`.