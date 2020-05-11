class Contact {
  id: string;

  name: string;

  nickname: string;

  emoji: number;

  constructor(id = '', name = '', nickname = '', emoji = 0) {
    this.id = id;
    this.name = name;
    this.nickname = nickname;
    this.emoji = emoji;
  }
}

export default Contact;
