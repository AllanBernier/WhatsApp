import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Contact } from '@/types/contact'
import React from 'react'

export const ContactCard = ({ contact, onClick }: { contact: Contact, onClick(): void }) => {
  return (
    <div className='m-4 flex justify-between' onClick={onClick}>
      <div className='flex items-center gap-4'>
        <Avatar>
          <AvatarImage src={contact.avatar} />
          <AvatarFallback>
            {contact.name.split(' ').map((name) => name[0]).join('')}
          </AvatarFallback>
        </Avatar>

        <div>
          <h3 className='text-lg font-bold'>{contact.name}</h3>
          <p className='text-left text-sm'>{contact.lastMessage}</p>
        </div>
      </div>
      <div>
        <p className='text-sm'>{contact.lastMessageDate}</p>
        {contact.unreadMessages > 0 && (
          <div className='flex justify-end'>
            <Badge className='bg-primary text-secondary text-xs border-0 rounded-full' variant='outline' >{contact.unreadMessages}</Badge>
          </div>
        )}
      </div>
    </div>
  )
}
