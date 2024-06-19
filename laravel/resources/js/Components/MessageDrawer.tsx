import { Button } from '@/components/ui/button'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from '@/components/ui/drawer'
import { Contact } from '@/types/contact'
import { ArrowLeft, Camera, EllipsisVertical, Mic, Paperclip, Phone, Send, SmilePlus, Video } from 'lucide-react'
import React, { PropsWithChildren, useState } from 'react'

export const MessageDrawer = ({ contact, children, close }: PropsWithChildren<{ contact: Contact | undefined, close(): void }>) => {

  const [tosend, setTosend] = useState<string>('')

  return (
    <Drawer direction="right" open={contact != undefined} onClose={() => close()}>
      <DrawerTrigger className='w-screen'>
        {children}
      </DrawerTrigger>
      <DrawerContent className='h-screen'>
        <DrawerHeader className='flex justify-between items-center p-0 py-2'>
          <div className='flex items-center'>
            <ArrowLeft onClick={close} />
            <div className='w-12 h-12 rounded-full'></div>
            <div className='pl-4 text-left'>
              <DrawerTitle>{contact?.name}</DrawerTitle>
              <h1 className='text-xs'>en ligne auj. à 8h31</h1>
            </div>
          </div>

          <div className='flex items-center gap-4'>
            <Video />
            <Phone />
            <EllipsisVertical />
          </div>
        </DrawerHeader>

        <div className='h-screen flex flex-col bg-no-repeat bg-cover gap-4 bg-[url("/images/background.png")]'>

          <div className='flex flex-col gap-4 p-2'>
            <div className='flex justify-end'>
              <div className='bg-secondary p-2 rounded-xl'>
                <p className='text-sm'>Salut</p>
              </div>
            </div>

            <div className='flex justify-start'>
              <div className='bg-card p-2 rounded-xl'>
                <p className='text-sm'>Salut</p>
              </div>
            </div>

          </div>


          <div className='w-screen flex mt-auto '>
            <div className='m-1 p-2 flex bg-card rounded-full w-full justify-between'>
              <div className='flex gap-2'>
                <SmilePlus />
                <input placeholder='Message' type="text" className='outline-none bg-card' value={tosend} onChange={(e) => setTosend(e.target.value)} />
              </div>
              <div className='flex items-center gap-4'>
                <Paperclip />
                {tosend.length === 0 && (
                  <Camera />
                )}
              </div>
            </div>

            <div className='rounded-full p-2 m-1 bg-emerald-800'>
              {tosend.length > 0 ? (
                <Send onClick={() => setTosend('')} />
              ) : (
                <Mic />
              )}
            </div>

          </div>

        </div>



      </DrawerContent>
    </Drawer>
  )
}
