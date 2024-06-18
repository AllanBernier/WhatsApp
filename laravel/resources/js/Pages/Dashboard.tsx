import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Camera, EllipsisVertical, MessageCircleHeart, MessageSquareDiff, MessageSquareText, Phone, Search, Users } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { Separator } from '@radix-ui/react-separator';
import { Contact } from '@/types/contact';
import { ContactCard } from '@/Components/ContactCard';

export default function Dashboard({ auth }: PageProps) {

    const [activeFilter, setActiveFilter] = useState('all');
    const [activeTab, setActiveTab] = useState('discussions');

    const [contacts, setContacts] = useState<Contact[]>([
        { id: 1, name: 'Florian Bernier', avatar: 'https://randomuser.me/api/portraits', lastMessage: 'Yo ! What up', lastMessageDate: '12:00', unreadMessages: 0, group: false },
        { id: 2, name: 'Clément Hamon', avatar: 'https://randomuser.me/api/portraits', lastMessage: 'Hey', lastMessageDate: '15:24', unreadMessages: 1, group: false },
        { id: 3, name: 'Romain Dinel', avatar: 'https://randomuser.me/api/portraits', lastMessage: 'How are u ?', lastMessageDate: '31/01/2023', unreadMessages: 0, group: false },
    ])


    return (
        <div className='w-screen'>
            <div className='m-4 flex justify-between w-full'>
                <h1 className='text-2xl font-bold'>WhatsApp</h1>
                <div className='flex items-center gap-4'>
                    <Camera />
                    <Search />
                    <EllipsisVertical />
                </div>
            </div>

            <div className='flex items-center m-4 gap-4'>
                <Badge onClick={() => setActiveFilter("all")} className={`font-bold hover:cursor-pointer ${activeFilter === 'all' ? 'bg-emerald-950 text-green-700' : ''}`} variant="outline">Toutes</Badge>
                <Badge onClick={() => setActiveFilter("unread")} className={`font-bold hover:cursor-pointer ${activeFilter === 'unread' ? 'bg-emerald-950 text-green-700' : ''}`} variant="outline">Non lues</Badge>
                <Badge onClick={() => setActiveFilter("groupes")} className={`font-bold hover:cursor-pointer ${activeFilter === 'groupes' ? 'bg-emerald-950 text-green-700' : ''}`} variant="outline">Groupes</Badge>
            </div>


            {contacts.map(contact => (
                <ContactCard key={contact.id} contact={contact} />
            ))}

            {/* Ajouter une conversation (static bottom right button) */}

            <div className='fixed bottom-24 right-4'>
                <button className='bg-green-700 text-emerald-950 rounded-xl p-4'>
                    <MessageSquareDiff />
                </button>
            </div>

            {/* Sticky bottom for mobile app buttons */}
            <div className='fixed bottom-0 w-full'>
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
        </div>

    );
}
