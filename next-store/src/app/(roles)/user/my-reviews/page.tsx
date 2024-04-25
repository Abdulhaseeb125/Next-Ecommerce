
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { StarIcon } from "@radix-ui/react-icons"

export default function Component() {
    return (
        <div className="grid w-full">

            <div className="flex flex-col">
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
                    <div className="flex items-center">
                        <h1 className="font-semibold text-lg md:text-2xl">Product Reviews</h1>
                        <form className="ml-auto flex items-center gap-2 md:gap-4">
                            <Label className="sr-only" htmlFor="filter">
                                Search
                            </Label>
                            <Input className="w-full max-w-xs md:max-w-sm" id="filter" placeholder="Search..." type="search" />
                            <Button type="submit">Search</Button>
                        </form>
                    </div>

                    <div className="mx-auto px-4 md:px-6 max-w-3xl grid gap-12">
                        <div className="flex items-start gap-4">
                            <div className="grid gap-0.5 text-sm">
                                <h3 className="font-semibold">Sarah Johnson</h3>
                                <time className="text-sm text-gray-500 dark:text-gray-400">2 days ago</time>
                            </div>
                            <div className="flex items-center gap-0.5 ml-auto">
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                            </div>
                        </div>
                        <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                            <p>
                                {`
                                I've been experimenting with my LuminaCook Multi-Function Air Fryer for a few weeks now, and it's been a
                                versatile addition to my kitchen. It's great for making crispy fries, chicken wings, and even some
                                healthier options.
                                `}
                            </p>
                        </div>
                        <Separator />
                        <div className="flex items-start gap-4">
                            <div className="grid gap-0.5 text-sm">
                                <h3 className="font-semibold">Alex Smith</h3>
                                <time className="text-sm text-gray-500 dark:text-gray-400">3 weeks ago</time>
                            </div>
                            <div className="flex items-center gap-0.5 ml-auto">
                                <StarIcon className="w-5 h-5" />
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                            </div>
                        </div>
                        <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                            <p>
                                {`I recently purchased the SparkleShine Home Cleaning Robot, and it has been a game-changer in my life. I
                                used to spend hours every weekend cleaning my house, but now I can simply turn on this little robot and
                                let it do the work. It's incredibly efficient, navigating around obstacles with ease. The only reason I
                                didn't give it a perfect 5-star rating is that it occasionally gets stuck under low furniture. Overall,
                                it's been a great addition to my home, saving me time and effort.`}                            </p>
                        </div>
                        <Separator />
                        <div className="flex items-start gap-4">
                            <div className="grid gap-0.5 text-sm">
                                <h3 className="font-semibold">Emily Parker</h3>
                                <time className="text-sm text-gray-500 dark:text-gray-400">2 days ago</time>
                            </div>
                            <div className="flex items-center gap-0.5 ml-auto">
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-primary" />
                                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                            </div>
                        </div>
                        <div className="text-sm leading-loose text-gray-500 dark:text-gray-400">
                            <p>
                                {`
                                The battery life is impressive, lasting me for long-haul flights without any issues. They are
                                comfortable to wear for extended periods, and I appreciate the sleek design. Worth every penny, and I'd
                                recommend these headphones to anyone who values high-quality audio and peace and quiet.
                                `}
                            </p>
                        </div>
                        <Separator />
                    </div>
                </main>
            </div>
        </div>
    )
}
