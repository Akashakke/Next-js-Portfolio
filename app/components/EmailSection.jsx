import React from 'react'
import GithubIcon from '../../public/images/projects/github-icon.svg'
import LinkdlnIcon from '../../public/images/projects/linkedin-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

export default function EmailSection() {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4'>
        <div><h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text=[@ADB7BE] mb-4 max-w-md'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quo tempora natus quae labore tenetur neque in omnis doloribus nam. Quisquam quaerat, excepturi qui doloremque autem sunt vel repellat deserunt.
        </p>
        <div className='socials flex flex-row gap-2'>
<Link href='github.com'>
<Image src={GithubIcon} alt='github'/>
</Link>
<Link href='linkdin.com'>
<Image src={LinkdlnIcon} alt='linkdin'/>
</Link>
        </div>
        </div>
        <div>
            <form className='flex flex-col gap-4'>
                <label htmlFor="email" type='email' className='text-white'>
                    Name
                </label>
            </form>
        </div>
    </section>
  )
}
