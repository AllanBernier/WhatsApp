import { PageProps } from '@/types';
import { Camera, EllipsisVertical, MessageCircleHeart, MessageSquareDiff, MessageSquareText, Phone, Search, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import { Contact } from '@/types/contact';
import { ContactCard } from '@/Components/ContactCard';
import { MessageDrawer } from '@/Components/MessageDrawer';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function Dashboard({ auth, contacts }: PageProps<{ contacts: Contact[] | undefined }>) {

    const [activeFilter, setActiveFilter] = useState('all');
    const [activeTab, setActiveTab] = useState('discussions');

    const [contact, setContact] = useState<Contact | undefined>(undefined);

    return (
        <div className='w-screen'>
            <div className='flex w-full'>
                <div className='flex justify-between w-full m-4'>
                    <h1 className='text-2xl font-bold'>WhatsApp</h1>
                    <div className='flex items-center gap-4'>
                        <Camera />
                        <Search />
                        <EllipsisVertical />
                    </div>

                </div>
            </div>

            <MessageDrawer contact={contact} close={() => setContact(undefined)}>
                <ScrollArea className="h-[80vh] ">
                    <div className='flex items-center m-4 gap-4'>
                        <Badge onClick={() => setActiveFilter("all")} className={`border-0 font-bold hover:cursor-pointer ${activeFilter === 'all' ? 'bg-secondary text-primary' : 'bg-slate-400'}`} variant="outline">Toutes</Badge>
                        <Badge onClick={() => setActiveFilter("unread")} className={`border-0 font-bold hover:cursor-pointer ${activeFilter === 'unread' ? 'bg-secondary text-primary' : 'bg-slate-400'}`} variant="outline">Non lues</Badge>
                        <Badge onClick={() => setActiveFilter("groupes")} className={`border-0 font-bold hover:cursor-pointer ${activeFilter === 'groupes' ? 'bg-secondary text-primary' : 'bg-slate-400'}`} variant="outline">Groupes</Badge>
                    </div>

                    {contacts && contacts.map(contact => (
                        <ContactCard key={contact.id} contact={contact} onClick={() => setContact(contact)} />
                    ))}

                    <div className='h-[50vh]'>

                    </div>
                </ScrollArea>
            </MessageDrawer>

            {!contact && (
                <>
                    <div className='fixed bottom-24 right-4'>
                        <button className='bg-primary text-secondary rounded-xl p-4'>
                            <MessageSquareDiff />
                        </button>
                    </div>

                    <div className='fixed bottom-0 w-full bg-background'>
                        <div className='flex justify-between p-4'>
                            <div className='flex flex-col items-center'>
                                <MessageSquareText />
                                Discussions
                            </div>

                            <div className='flex flex-col items-center'>
                                <MessageCircleHeart />
                                Actus
                            </div>

                            <div className='flex flex-col items-center'>
                                <Users />
                                Communautés
                            </div>

                            <div className='flex flex-col items-center'>
                                <Phone />
                                Appels
                            </div>

                        </div>
                    </div>
                </>)}
        </div>

    );
}
