const add = (a, b) => a + b;


export default add;   
// "export default"只能有一個

// 一個js檔案可以一次export很多個東西
export const minus = (a, b) => {  // 要export一個function一定要export一個function的變數
    return a-b;
}

export const name = "Mike"; 

export const age = 18;