# hello-world-k8s
This is a sample hello world web app written in Node.js that will show the hostname of the current device/container.   
It uses only built-in Node.js modules for simplicty.

<br/>

![Screenshot](https://raw.githubusercontent.com/ahmedwadod/hello-world-nodejs/main/screenshot.png)

<br/>

# Purpose
This simple app is intended to be used in a Kubernetes Deployment where the app has more than one replica and it is being exposed through a Load Balancer Service so it will show that the app is running on different pods by displaying the hostname.

# Usage
  
## Testing Out The Node App Locally
1- To run on port `8080` do `$ node app.js` in the terminal  
2- Or you can provide your own port in the environment variable `NODEJS_PORT`  
    Ex: `$ env NODEJS_PORT=5000 node app.js`  

## Building and Running The Docker Image
1- To build the image run `$ docker build .`  
2- List available Docker images by running `$ docker image ls`. The output should be something like:  
```
REPOSITORY   TAG       IMAGE ID       CREATED          SIZE
<none>       <none>    9cee88e273b8   49 seconds ago   170MB
node         alpine    025c3cbb849f   14 hours ago     169MB
...
```
3- Grab the IMAGE ID of the newly built image. (In the example above it will be `9cee88e273b8`)  
2- To run a container using the built image run `$ docker run -p 8080:8080 <IMAGE_ID>`  
You should see on your terminal something like  
```
Server will start at port: 8080
```

## Kubernetes Deployment (Local)
In the file `deployment.yaml` you will find a Kubernetes deployment that will spin up this app with `3 replicas` and one `load balancer`.  

To run this in your k8s cluster follow these steps:  
1- Add the External IP for the load balancer in the `deployment.yaml` file by replacing the `###.###.###.###` under `externalIPs` with the actual IP you want to use.  
2- Using `kubectl` run `$ kubectl apply -f deployment.yaml`  

# License
This project is licensed under the `MIT License`.