import sum from "../sum";


test("sum  function should be able to add two numbers",()=>{
    const result=sum(4,4);

    expect(result).toBe(8)
})