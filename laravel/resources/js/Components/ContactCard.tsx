import { Badge } from '@/components/ui/badge'
import { Contact } from '@/types/contact'
import React from 'react'

export const ContactCard = ({ contact }: { contact: Contact }) => {
  return (
    <div className='m-4 flex justify-between'>
      <div className='flex items-center gap-4'>
        <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
        <div>
          <h3 className='text-lg font-bold'>{contact.name}</h3>
          <p className='text-sm'>{contact.lastMessage}</p>
        </div>
      </div>
      <div>
        <p className='text-sm'>{contact.lastMessageDate}</p>
        {contact.unreadMessages > 0 && (
          <div className='flex justify-end'>
            <Badge className='bg-green-700 text-emerald-950 text-xs' variant='outline' >{contact.unreadMessages}</Badge>
          </div>
        )}
      </div>
    </div>
  )
}
