class Builder{
    setName(name){
        this.name = name;
        return this;
    }
    setPort(port){
        this.port = port;
        return this;
    }
    setHost(host){
        this.host = host;
        return this;
    }

    build(){
        retrun new FunkyClass(this.host,this.port, this.name);
    }
}

class FunkyClass{
    constructor(...args){
        console.log(args);
    }
}


const = new Builder().setPort('*').setPort(3000).setName("api").build();