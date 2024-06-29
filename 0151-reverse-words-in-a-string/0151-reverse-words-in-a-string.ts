function reverseWords(s: string): string {
    const arr: string[] = s.split(' ');
    const res: string[] = [];
    
    while (arr.length) {
        const w:string = arr.pop();
        if (w !== '') res.push(w);
    }
    
    return res.join(' ');
};