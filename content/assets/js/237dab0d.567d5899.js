"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2582],{15680:(e,n,r)=>{r.d(n,{xA:()=>p,yg:()=>d});var t=r(96540);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},p=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},g=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),g=o,d=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return r?t.createElement(d,a(a({ref:n},p),{},{components:r})):t.createElement(d,a({ref:n},p))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=g;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},47428:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=r(58168),o=(r(96540),r(15680));const i={},a="Kubernetes \u90e8\u7f72 RocketMQ",c={unversionedId:"quickStart/04quickstartWithHelmInKubernetes",id:"version-5.0/quickStart/04quickstartWithHelmInKubernetes",title:"Kubernetes \u90e8\u7f72 RocketMQ",description:"\u672c\u6587\u4ecb\u7ecd\u5728 Kubernetes \u73af\u5883\u4e0b\u5982\u4f55\u4f7f\u7528 Helm \u5feb\u901f\u90e8\u7f72\u4e00\u4e2a\u5355\u8282\u70b9 RocketMQ-5.X \u7248\u672c\u7684\u670d\u52a1\uff0c\u5e76\u5b8c\u6210\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002",source:"@site/versioned_docs/version-5.0/02-quickStart/04quickstartWithHelmInKubernetes.md",sourceDirName:"02-quickStart",slug:"/quickStart/04quickstartWithHelmInKubernetes",permalink:"/docs/quickStart/04quickstartWithHelmInKubernetes",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/02-quickStart/04quickstartWithHelmInKubernetes.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Run RocketMQ with Docker Compose",permalink:"/docs/quickStart/03quickstartWithDockercompose"},next:{title:"Domain Model",permalink:"/docs/domainModel/01main"}},s={},l=[{value:"\u524d\u63d0\u6761\u4ef6",id:"\u524d\u63d0\u6761\u4ef6",level:2},{value:"1.\u5b89\u88c5 Helm",id:"1\u5b89\u88c5-helm",level:2},{value:"2.\u4e0b\u8f7d RocketMQ Helm \u4ed3\u5e93",id:"2\u4e0b\u8f7d-rocketmq-helm-\u4ed3\u5e93",level:2},{value:"3.\u90e8\u7f72 RocketMQ",id:"3\u90e8\u7f72-rocketmq",level:2},{value:"4.\u9a8c\u8bc1\u6d88\u606f\u53d1\u9001\u548c\u63a5\u6536",id:"4\u9a8c\u8bc1\u6d88\u606f\u53d1\u9001\u548c\u63a5\u6536",level:2},{value:"5.\u91ca\u653e RocketMQ \u8d44\u6e90",id:"5\u91ca\u653e-rocketmq-\u8d44\u6e90",level:2}],p={toc:l},u="wrapper";function m(e){let{components:n,...r}=e;return(0,o.yg)(u,(0,t.A)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"kubernetes-\u90e8\u7f72-rocketmq"},"Kubernetes \u90e8\u7f72 RocketMQ"),(0,o.yg)("p",null,"\u672c\u6587\u4ecb\u7ecd\u5728 Kubernetes \u73af\u5883\u4e0b\u5982\u4f55\u4f7f\u7528 Helm \u5feb\u901f\u90e8\u7f72\u4e00\u4e2a\u5355\u8282\u70b9 RocketMQ-5.X \u7248\u672c\u7684\u670d\u52a1\uff0c\u5e76\u5b8c\u6210\u7b80\u5355\u7684\u6d88\u606f\u6536\u53d1\u3002"),(0,o.yg)("h2",{id:"\u524d\u63d0\u6761\u4ef6"},"\u524d\u63d0\u6761\u4ef6"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u4e00\u4e2a\u8fd0\u884c\u4e2d\u7684 ",(0,o.yg)("inlineCode",{parentName:"li"},"Kubernetes")," \u96c6\u7fa4"),(0,o.yg)("li",{parentName:"ul"},"\u5df2\u5b89\u88c5\u7684 ",(0,o.yg)("inlineCode",{parentName:"li"},"Helm 3.7.0+ ")),(0,o.yg)("li",{parentName:"ul"},"64\u4f4d ",(0,o.yg)("inlineCode",{parentName:"li"},"JDK 1.8+"))),(0,o.yg)("h2",{id:"1\u5b89\u88c5-helm"},"1.\u5b89\u88c5 Helm"),(0,o.yg)("p",null,"\u786e\u4fdd\u4f60\u7684\u7cfb\u7edf\u4e0a\u5df2\u7ecf\u5b89\u88c5\u4e86 Helm\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"$ helm version\n")),(0,o.yg)("p",null,"\u5982\u679c\u672a\u5b89\u88c5 Helm\uff083.7.0\u4ee5\u4e0a\u7248\u672c\uff09\uff0c\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"$ curl https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash\n")),(0,o.yg)("h2",{id:"2\u4e0b\u8f7d-rocketmq-helm-\u4ed3\u5e93"},"2.\u4e0b\u8f7d RocketMQ Helm \u4ed3\u5e93"),(0,o.yg)("p",null,"\u4f7f\u7528 Helm chart \u90e8\u7f72 RocketMQ\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"$ helm pull oci://registry-1.docker.io/apache/rocketmq --version 0.0.1\n$ tar -zxvf rocketmq-0.0.1.tgz\n")),(0,o.yg)("h2",{id:"3\u90e8\u7f72-rocketmq"},"3.\u90e8\u7f72 RocketMQ"),(0,o.yg)("p",null,"\u4f7f\u7528 Helm chart \u90e8\u7f72 RocketMQ\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"$ vim values.yaml\n##values.yaml, \u4f8b\u5982\u6839\u636e\u673a\u5668\u53ef\u7528\u5185\u5b58\u5927\u5c0f\u5c06broker\u4e2dresources\u4e2drequests\u548climits\u7684memory\u8fdb\u884c\u8c03\u6574##\n  resources:\n    limits:\n      cpu: 2\n      memory: 10Gi\n    requests:\n      cpu: 2\n      memory: 10Gi\n##values.yaml##\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"$ helm install rocketmq-demo ./rocketmq\n\n#\u67e5\u770bpod\u72b6\u6001\n#\u82e5\u53c2\u6570\u6b63\u5e38\uff0c\u5219\u8868\u660e\u90e8\u7f72\u6210\u529f\n$ kubectl get pods -o wide -n default\nNAME                                        READY   STATUS    RESTARTS       AGE    IP               NODE         NOMINATED NODE   READINESS GATES\nrocketmq-demo-broker-0                      1/1     Running   0              6h3m   192.168.58.225   k8s-node02   <none>           <none>\nrocketmq-demo-nameserver-757877747b-k669k   1/1     Running   0              6h3m   192.168.58.226   k8s-node02   <none>           <none>\nrocketmq-demo-proxy-6c569bd457-wcg6g        1/1     Running   3 (6h2m ago)   6h3m   192.168.85.227   k8s-node01   <none>           <none>\n")),(0,o.yg)("h2",{id:"4\u9a8c\u8bc1\u6d88\u606f\u53d1\u9001\u548c\u63a5\u6536"},"4.\u9a8c\u8bc1\u6d88\u606f\u53d1\u9001\u548c\u63a5\u6536"),(0,o.yg)("p",null,"\u4f7f\u7528JAVA SDK\u6d4b\u8bd5\u6d88\u606f\u6536\u53d1\uff08\u7531\u4e8e\u672c\u5730\u7f51\u7edc\u548ck8s\u7f51\u7edc\u4e0d\u5c5e\u4e8e\u540c\u4e00\u5185\u7f51\uff0c\u9700\u8981\u5c06\u9879\u76ee\u672c\u5730\u6253\u5305\u540e\u653e\u5728\u8fdc\u7a0b\u8fd0\u884c\uff0c\u6253\u5305\u540e\u5c06target\u76ee\u5f55\u4e0b\u7684jar\u5305\u62f7\u8d1d\u81f3\u81f3\u76ee\u6807\u670d\u52a1\u5668\u4e0a\u6267\u884c",(0,o.yg)("inlineCode",{parentName:"p"},"java -jar jar\u5305\u540d\u79f0"),"\uff09\uff0c\u5177\u4f53\u5982\u4e0b\uff1a"),(0,o.yg)("p",null,"1\uff09IDEA\u4e2d\u521b\u5efa\u4e00\u4e2aJava\u5de5\u7a0b\u3002"),(0,o.yg)("p",null,"2\uff09\u5728 ",(0,o.yg)("em",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56\u5f15\u5165Java\u4f9d\u8d56\u5e93\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"}," ...... \n    <dependency>\n            <groupId>org.apache.rocketmq</groupId>\n            <artifactId>rocketmq-client-java</artifactId>\n            <version>5.0.7</version>\n      </dependency>\n    .....\n")),(0,o.yg)("p",null,"3\uff09\u4f7f\u7528 mqadmin \u521b\u5efa Topic\u548c\u6d88\u8d39\u8005\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"#\u767b\u5f55pod\u5185\uff08\u9700\u8981\u7ba1\u7406\u5de5\u5177\uff09\uff0c\u4e5f\u53ef\u4ee5\u5728\u5bbf\u4e3b\u673a\u6267\u884c\n$ kubectl exec -ti rocketmq-demo-broker-0  -- /bin/bash\n\n#\u901a\u8fc7mqadmin\u521b\u5efaTopic\n$ sh mqadmin updatetopic  -t TestTopic -c DefaultCluster\n\n#\u901a\u8fc7mqadmin\u521b\u5efa\u6d88\u8d39\u8005Group\n$ sh mqadmin updateSubGroup -c DefaultCluster -g TestGroup\n")),(0,o.yg)("p",null,"4\uff09\u5728\u5df2\u521b\u5efa\u7684Java\u5de5\u7a0b\u4e2d\uff0c\u521b\u5efa\u53d1\u9001\u666e\u901a\u6d88\u606f\u7a0b\u5e8f \uff08ProducerDemo.java\uff09\uff0c\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'package com.rocketmq.producer;\n\nimport org.apache.rocketmq.client.apis.ClientConfiguration;\nimport org.apache.rocketmq.client.apis.ClientConfigurationBuilder;\nimport org.apache.rocketmq.client.apis.ClientException;\nimport org.apache.rocketmq.client.apis.ClientServiceProvider;\nimport org.apache.rocketmq.client.apis.message.Message;\nimport org.apache.rocketmq.client.apis.producer.Producer;\nimport org.apache.rocketmq.client.apis.producer.SendReceipt;\n\n\npublic class ProducerDemo {\n    public static void main(String[] args) throws ClientException {\n        // \u63a5\u5165\u70b9\u5730\u5740\uff0c\u9700\u8981\u8bbe\u7f6e\u6210Proxy\u7684\u5730\u5740\u548c\u7aef\u53e3\u5217\u8868\uff0c\u4ee5\u4e0b\u4e3ak8s\u73af\u5883\u4e0brocketmq\u7684proxy\u5730\u5740\u3002\n        String endpoint = "192.168.85.227:8081";\n        // \u6d88\u606f\u53d1\u9001\u7684\u76ee\u6807Topic\u540d\u79f0\uff0c\u9700\u8981\u63d0\u524d\u521b\u5efa\u3002\n        String topic = "TestTopic";\n        ClientServiceProvider provider = ClientServiceProvider.loadService();\n        ClientConfigurationBuilder builder = ClientConfiguration.newBuilder().setEndpoints(endpoint);\n        ClientConfiguration configuration = builder.build();\n        // \u521d\u59cb\u5316Producer\u65f6\u9700\u8981\u8bbe\u7f6e\u901a\u4fe1\u914d\u7f6e\u4ee5\u53ca\u9884\u7ed1\u5b9a\u7684Topic\u3002\n        Producer producer = provider.newProducerBuilder()\n                .setTopics(topic)\n                .setClientConfiguration(configuration)\n                .build();\n        // \u666e\u901a\u6d88\u606f\u53d1\u9001\u3002\n        Message message = provider.newMessageBuilder()\n                .setTopic(topic)\n                // \u8bbe\u7f6e\u6d88\u606f\u7d22\u5f15\u952e\uff0c\u53ef\u6839\u636e\u5173\u952e\u5b57\u7cbe\u786e\u67e5\u627e\u67d0\u6761\u6d88\u606f\u3002\n                .setKeys("messageKey")\n                // \u8bbe\u7f6e\u6d88\u606fTag\uff0c\u7528\u4e8e\u6d88\u8d39\u7aef\u6839\u636e\u6307\u5b9aTag\u8fc7\u6ee4\u6d88\u606f\u3002\n                .setTag("messageTag")\n                // \u6d88\u606f\u4f53\u3002\n                .setBody("messageBody".getBytes())\n                .build();\n        try {\n            // \u53d1\u9001\u6d88\u606f\uff0c\u9700\u8981\u5173\u6ce8\u53d1\u9001\u7ed3\u679c\uff0c\u5e76\u6355\u83b7\u5931\u8d25\u7b49\u5f02\u5e38\u3002\n            SendReceipt sendReceipt = producer.send(message);\n            System.out.println("Send message successfully, messageId="+sendReceipt.getMessageId());\n        } catch (ClientException e) {\n\n        }\n        // producer.close();\n    }\n}\n')),(0,o.yg)("p",null,"5\uff09\u5728\u5df2\u521b\u5efa\u7684Java\u5de5\u7a0b\u4e2d\uff0c\u521b\u5efa\u8ba2\u9605\u666e\u901a\u6d88\u606f\u7a0b\u5e8f(Consumer.java)\u3002Apache RocketMQ \u652f\u6301",(0,o.yg)("a",{parentName:"p",href:"https://rocketmq.apache.org/zh/docs/featureBehavior/06consumertype"},"SimpleConsumer"),"\u548c",(0,o.yg)("a",{parentName:"p",href:"https://rocketmq.apache.org/zh/docs/featureBehavior/06consumertype"},"PushConsumer"),"\u4e24\u79cd\u6d88\u8d39\u8005\u7c7b\u578b \uff0c\u8fd9\u91cc\u4f7f\u7528PushConsumers\u7c7b\u578b\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-java"},'\npackage com.rocketmq.consumer;\n\nimport java.io.IOException;\nimport java.util.Collections;\nimport org.apache.rocketmq.client.apis.ClientConfiguration;\nimport org.apache.rocketmq.client.apis.ClientException;\nimport org.apache.rocketmq.client.apis.ClientServiceProvider;\nimport org.apache.rocketmq.client.apis.consumer.ConsumeResult;\nimport org.apache.rocketmq.client.apis.consumer.FilterExpression;\nimport org.apache.rocketmq.client.apis.consumer.FilterExpressionType;\nimport org.apache.rocketmq.client.apis.consumer.PushConsumer;\n\nimport java.util.List;\n\npublic class Consumer {\n    public static void main(String[] args) throws ClientException, IOException, InterruptedException {\n        final ClientServiceProvider provider = ClientServiceProvider.loadService();\n        // \u63a5\u5165\u70b9\u5730\u5740\uff0c\u9700\u8981\u8bbe\u7f6e\u6210Proxy\u7684\u5730\u5740\u548c\u7aef\u53e3\u5217\u8868\uff0c\u4ee5\u4e0b\u4e3ak8s\u73af\u5883\u4e0brocketmq\u7684proxy\u5730\u5740\u3002\n        String endpoints = "192.168.85.227:8081";\n        ClientConfiguration clientConfiguration = ClientConfiguration.newBuilder()\n                .setEndpoints(endpoints)\n                .build();\n        // \u8ba2\u9605\u6d88\u606f\u7684\u8fc7\u6ee4\u89c4\u5219\uff0c\u8868\u793a\u8ba2\u9605\u6240\u6709Tag\u7684\u6d88\u606f\u3002\n        String tag = "*";\n        FilterExpression filterExpression = new FilterExpression(tag, FilterExpressionType.TAG);\n        // \u4e3a\u6d88\u8d39\u8005\u6307\u5b9a\u6240\u5c5e\u7684\u6d88\u8d39\u8005\u5206\u7ec4\uff0cGroup\u9700\u8981\u63d0\u524d\u521b\u5efa\u3002\n        String consumerGroup = "TestGroup";\n        // \u6307\u5b9a\u9700\u8981\u8ba2\u9605\u54ea\u4e2a\u76ee\u6807Topic\uff0cTopic\u9700\u8981\u63d0\u524d\u521b\u5efa\u3002\n        String topic = "TestTopic";\n        // \u521d\u59cb\u5316PushConsumer\uff0c\u9700\u8981\u7ed1\u5b9a\u6d88\u8d39\u8005\u5206\u7ec4ConsumerGroup\u3001\u901a\u4fe1\u53c2\u6570\u4ee5\u53ca\u8ba2\u9605\u5173\u7cfb\u3002\n        PushConsumer pushConsumer = provider.newPushConsumerBuilder()\n                .setClientConfiguration(clientConfiguration)\n                // \u8bbe\u7f6e\u6d88\u8d39\u8005\u5206\u7ec4\u3002\n                .setConsumerGroup(consumerGroup)\n                // \u8bbe\u7f6e\u9884\u7ed1\u5b9a\u7684\u8ba2\u9605\u5173\u7cfb\u3002\n                .setSubscriptionExpressions(Collections.singletonMap(topic, filterExpression))\n                // \u8bbe\u7f6e\u6d88\u8d39\u76d1\u542c\u5668\u3002\n                .setMessageListener(messageView -> {\n                    // \u5904\u7406\u6d88\u606f\u5e76\u8fd4\u56de\u6d88\u8d39\u7ed3\u679c\u3002\n                    System.out.println("Consume message successfully, messageId="+ messageView.getMessageId());\n                    return ConsumeResult.SUCCESS;\n                })\n                .build();\n        Thread.sleep(Long.MAX_VALUE);\n        // \u5982\u679c\u4e0d\u9700\u8981\u518d\u4f7f\u7528 PushConsumer\uff0c\u53ef\u5173\u95ed\u8be5\u5b9e\u4f8b\u3002\n        // pushConsumer.close();\n    }\n}\n')),(0,o.yg)("h2",{id:"5\u91ca\u653e-rocketmq-\u8d44\u6e90"},"5.\u91ca\u653e RocketMQ \u8d44\u6e90"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"#\u91ca\u653e\u6240\u6709rocketmq\u8d44\u6e90\n$ helm uninstall rocketmq-demo\n")))}m.isMDXComponent=!0}}]);