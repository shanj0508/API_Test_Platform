window.dom={
    create(string){
        const container=document.createElement('template')
        container.innerHTML=string.trim();  //trim()去掉空格
        return container.content.children[0]
    },
    after(node,node2){
        node.parentNode.insertBefore(node2,node.nextSibling)
    },
    before(node,node2){
        node.parentNode.insertBefore(node2,node)

    },
    append(parent,node){
        parent.appendChild(node)
    },
    wrap(node,parentNode){
        dom.before(node,parentNode)
        dom.append(parentNode,node)
      
    },
    remove(node){
        node.parentNode.removeChild(node)
        // node.remove()   IE不支持
        return node
    },
    empty(node){
        // node.innerHTML=''   --会把文本节点都清除
        const {childNodes}= node
        let arr=[]
        let x = node.firstChild
        while(x){
            arr.push(dom.remove(x))//由于dom.remove(x)有return返回值，所以可以直接使用
            x = node.firstChild
        }
        return arr

    },
    attr(node,attrName,attrValue){
        if(arguments.length===3){
            node.setAttribute(attrName,attrValue)
        }else if(arguments.length===2){
            return node.getAttribute(attrName)
        }
    },
    text(node,newText){   
        if(arguments.length===2){
            if('innerText' in node){  //适配
                node.innerText=newText
            }
        }else if(arguments.length===1){
            if('innerText' in node){ 
                return node.innerText
            }  
        }
    },
//     html(){
        
//     }

//     //写html
// dom.html(test,'你好，这是新的内容')
// //读html
// const html = dom.html(test)
// console.log(`html:${html}`)
    style(node,name,value){
        // console.log(arguments[1])
        if(arguments.length===3){
       node.style[name]=value
    }else if(arguments.length===2){
        if(typeof name==='string'){
            return node.style[name]
        }else if(name instanceof Object){
            for(let key in name){
                node.style[key]=name[key]
            }
        }
    }

    },
    class:{
        add(node,className){
            node.classList.add(className)
        },
        remove(node,className){
            node.classList.remove(className)
        },
        has(node,className){
            return node.classList.contains(className)
        }
    },
    on(node,eventName,fn){
        node.addEventListener(eventName,fn)
    },
    off(node,eventName,fn){
        node.removeEventListener(eventName,fn)
    },
    find(selector,scrope){
        return (scrope||document).querySelectorAll(selector)
    },
    next(node){
        return node.nextElementSibling
 
    },
    previous(node){
        return node.previousElementSibling
 
    },
    children(node){
        return node.children

    },
    each(nodeList,fn){
        for(let i=0;i<nodeList.length;i++){
        fn.call(null,nodeList[i])
    }

    },
    index(node){
        let list=node.parentElement.children
        let i=0
        for(i=0;i<list.length;i++){
            if(list[i]===node){
             break   
            }
        }
        return i+1
      
    }
  


};

