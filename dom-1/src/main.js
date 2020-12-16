// const div3 = dom.create('<div id="parent"></div>')
// dom.attr(test,'title','xxx')  //写属性
// const title=dom.attr(test,'title')   //读属性
// console.log("title:"+title)

// dom.text(test,'你好，这是新的内容') //写文本内容
// const text = dom.text(test)   //读文本内容
// console.log(`text:${text}`)

// //写html
// dom.html(test,'你好，这是新的内容')
// //读html
// const html = dom.html(test)
// console.log(`html:${html}`)

// //写style
// dom.style(test,{border:'1px solid red',color:"red"})
// dom.style(test,'border','1px solid black')
// //读style
// console.log(dom.style(test,'border'))

// dom.class.add(test,"red")
// dom.class.add(test,"blue")
// dom.class.remove(test,"blue")
// console.log(dom.class.has(test,"red"))  //true

// const fn=()=>{console.log("点击了")}
// dom.on(test,'click',fn)
// dom.off(test,'click',fn)


// const testDiv = dom.find('#test')[0]
// console.log(testDiv)
// //在testDiv范围下查找.red
// console.log(dom.find('.red',testDiv)[0])


// console.log(dom.next(dom.find('.red')[0]))

// console.log(dom.previous(dom.find('.red')[0]))

// const t = dom.find('#test')[0]
// dom.each(dom.children(t),(n)=>dom.style(n,"color","red"))

console.log(dom.index(child1))