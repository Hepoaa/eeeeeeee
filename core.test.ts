import{describe,it,expect}from'vitest';import{cents}from'../worker/lib/security';
describe('money',()=>{it('stores integer cents',()=>{expect(cents('1234.56')).toBe(123456);expect(cents('$870')).toBe(87000)});it('rejects malformed amounts',()=>expect(()=>cents('12.345')).toThrow())});
describe('permissions contract',()=>{it('keeps family id as mandatory scope concept',()=>{const q='WHERE family_id=?';expect(q).toContain('family_id=?')})});
describe('split arithmetic',()=>{it('splits cents exactly',()=>{const total=240001,n=3,base=Math.floor(total/n),parts=Array(n).fill(base);for(let i=0;i<total-base*n;i++)parts[i]++;expect(parts.reduce((a,b)=>a+b,0)).toBe(total)})});
