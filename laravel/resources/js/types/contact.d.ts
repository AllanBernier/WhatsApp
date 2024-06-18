export type Contact = {
    id: number;
    name: string;
    avatar ?: string;
    lastMessage: string;
    lastMessageDate: string;
    unreadMessages: number;
    group: boolean;
};