import { capitalize } from ".";
import { reverseString } from ".";
import { calculator } from ".";
import { caesarCipher } from ".";
import { analyzeArray } from ".";
test('the first character capitalized', () => {
    expect(capitalize("mohmad")).toBe("Mohmad");
  });

test('reversed string',()=>{
    expect(reverseString("hamza")).toBe("azmah");
    expect(reverseString("faroq")).toBe("qoraf");
  });

  test("calculateee!",()=>{
    expect(calculator.add(33,11)).toBe(44);
    expect(calculator.sub(50,100)).toBe(-50);
    expect(calculator.div(90,30)).toBe(3);
    expect(calculator.mul(3,3)).toBe(9);

  });

  test("Caesar Cipher",()=>{
    expect(caesarCipher("abc",20)).toBe("uvw");
    expect(caesarCipher("defend",1)).toBe("efgfoe");
    expect(caesarCipher("xyz!",3)).toBe("abc!");
    expect(caesarCipher("DaDa",0)).toBe("DaDa");
    expect(caesarCipher("ABZ",9)).toBe('JKI');
  });
  test("Array-->Obj",()=>{
    expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
    expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
    expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
    expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);

  })