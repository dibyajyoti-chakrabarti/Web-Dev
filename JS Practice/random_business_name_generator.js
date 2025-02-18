let adjactives=" Crazy Amazing Fire "
let shop_names=" Engine Foods Garments "
let another_word=" Bros Limited Hub "

let i1=parseInt(Math.random()*10)%3;
let i2=parseInt(Math.random()*10)%3;
let i3=parseInt(Math.random()*10)%3;

let final_name=""
let ct=0
for (let index in adjactives) {
    if (adjactives[index]==" "){
        if (ct==i1){
            let temp=adjactives.slice(parseInt(index)+1)
            let temp_index=temp.indexOf(" ")
            final_name+=temp.slice(0,temp_index)+" "
            break
        }
        ct++
    }
}
ct=0
for (let index in shop_names) {
    if (shop_names[index]==" "){
        if (ct==i2){
            let temp=shop_names.slice(parseInt(index)+1)
            let temp_index=temp.indexOf(" ")
            final_name+=temp.slice(0,temp_index)+" "
            break
        }
        ct++
    }
}
ct=0
for (let index in another_word) {
    if (another_word[index]==" "){
        if (ct==i3){
            let temp=another_word.slice(parseInt(index)+1)
            let temp_index=temp.indexOf(" ")
            final_name+=temp.slice(0,temp_index)
            break
        }
        ct++
    }
}
console.log(final_name)