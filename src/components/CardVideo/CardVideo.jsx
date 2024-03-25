import React from 'react'
import YouTube from 'react-youtube';
import { XMarkIcon } from '@heroicons/react/24/solid'
export const CardVideo = ({ videos, close,  }) => {
    return (
        <div className='flex items-start md:justify-center mt-2 w-[300px] h-[190px] md:w-[640px] md:h-[390px]'>
            {
                (videos !== undefined) ?
                    <>  
                        <div className='w-[300px] h-[180px] md:w-[640px] md:h-[390px] flex items-start ' >
                            <YouTube
                                videoId={videos.key}
                                className='w-[270px] h-[150px] md:w-[640px] md:h-[390px] '
                                opts={{
                                    width: '100%',
                                    height: '100%',
                                    playerVars: {
                                        autoplay: 1,
                                        controls: 1,
                                        cc_load_policy: 0,
                                        /* iv_load_policy: 0, */
                                        modestbranding: 0,
                                        showinfo: 0,
                                        rel: 0,
                                    }
                                }}
                            >
                            </YouTube>
                            
                            <button onClick={close}><XMarkIcon className='w-6 h-6'/></button>
                        </div>
                    </> : <p>No hay trailer disponible</p>
            }

        </div>
    )
}
