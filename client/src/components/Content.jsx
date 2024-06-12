const Content = () => {
    return(
        <div className="w-full h-full px-6 py-6 flex flex-col">
            <div className="flex gap-10 border-b border-subline pb-3">
                <button className="font-inrisans text-subtext text-sm">Music V</button>
                <button className="font-inrisans text-subtext text-sm">Newest V</button>
            </div>

            
            <div className="flex flex-col gap-2 py-6 border-b border-subline">
                <div className="flex gap-2">
                    <img className="w-10 h-10 rounded-full" src="/assets/test_profile.jpg" alt="" />
                    <div className="flex flex-col">
                        <p className="font-inrisans text-subtext text-xs">4 Hours Ago</p>
                        <p className="font-inrisans text-nametext text-sm">Cool_Username</p>
                    </div>
                </div>

                <p className="text-white font-inrisans text-2xl">What's your favourite moment in the underground Scene?</p>
                <p className="text-subtext font-inrisans">Naa Koy nakitan sa amo sugbayon sa sugbo ba na gwapo kaayo, ang name  mane guro niya kay Fynn 
                Kinsay nakaila aning tawhana hatagan nakog reward kiss hahhahha</p>

                <div className="flex gap-3 pt-3">
                    <button className="bg-button_color text-white text-sm flex items-center py-1 px-2 gap-2 rounded-xl">
                        <img className="w-3 h-3" src="/assets/like_post.png" alt="" />
                        2
                    </button>
                    <button className="bg-button_color text-white text-sm flex items-center py-1 px-2 gap-2 rounded-xl">
                        <img className="w-4 h-3" src="/assets/comment_icon.png" alt="" />
                        2
                    </button>
                </div>
            </div>


        </div>
    )

}

export default Content