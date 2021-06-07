class Post {

    title: string;
    content: string;
    loveIts: number;
    created_at: Date;

    constructor(title: string, content: string) {
        
        this.title = title;
        this.content = content;
        this.loveIts = Math.round(Math.random() * 100);
        this.created_at = this.getRandomDate(new Date('2019-02-12T01:57:45.271Z'), new Date('2021-02-12T01:57:45.271Z'))
    }

    getRandomDate(from: Date, to: Date) {
        const fromTime = from.getTime();
        const toTime = to.getTime();
        return new Date(fromTime + Math.random() * (toTime - fromTime));
    }
}