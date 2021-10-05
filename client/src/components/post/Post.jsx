import React, { Component } from "react";

class Post extends Component {
    render() {
        return(
            <div className="bg-reddit_dark-background text-gray-100 my-5">
                <div className="border border-reddit_border rounded-md bg-reddit_dark-brighter p-5">
                    <h2 className="text-xl font-bold mb-3">
                        For those who run after work, how do you get yourself in the mood when you're feeling tired or burnt out?
                    </h2>
                    <div>
                        <p>
                            There is always that moment when I enter my apartment after a long day of work and the idea
                            of running when I could instead sit down on my couch with a beer is very difficult to
                            motivate for, even though I know in an hour I will be so much happier if I just finished a
                            run than sat on my couch with a beer.

                            EDIT: alright y’all, thanks to all the tips I just ran after work and I am so pleased! First
                            thing is I went home did not sit down just changed and grabbed my stuff and left. I totally
                            turned off my brain until I was in my car on the road to the trail. That really took a lot
                            of mental effort out of it!

                            Second- once I was walking up the trail I was congratulating myself and taking note of the
                            scenery and the cute pups and the fresh air and my music and all that I felt grateful for
                            that wasn’t the running itself.

                            Third- As someone who needed to take a few months off, I don’t have much of a base so I
                            didn’t track any pace or distance or set any goal except to be out there for thirty minutes!
                            I ran most of it but definitely walked some hills and went slow. I do like to track my pace
                            and aim for certain goals, but for now the accomplishment will just be that I got out there
                            and moved until I’m more consistent.

                            Now I’m fully ready for my beer :)
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;