----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------STEP 1------------------------------------------------------------------------------------

Step 1: 
    Create the Main Page Container Right now the text is probably touching the edges of the browser. We need a container that will hold our entire website.

    function App() {
    return (
        <main className="min-h-screen bg-black p-6">
            <div className="max-w-7xl mx-auto">
                Ecommerce UI
            </div>
        </main>
        );
    }

    export default App;


=> min-h-screen: Makes the page at least the height of the screen.

=> bg-black: Black background like the design.

=> p-6: Adds padding around the page.

=> max-w-7xl: Prevents content from becoming too wide on large monitors.

=> mx-auto: Centers the content horizontally.

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------STEP 2-------------------------------------------------------------------------------------

STEP 2: 
    Here we are creating a components folder which has a navbar folder and it has Navbar.jsx file and that file is imported into App.jsx file.

    const Navbar = () => {
        return (
            <nav className="h-20 rounded-3xl border border-zinc-800">
                Navbar
            </nav>
        );
    };

    export default Navbar;

=> Right now "Navbar" is probably sitting in the top-left corner.

    flex items-center justify-between px-6

        => flex: Turns the navbar into a flex container.

        => items-center: Centers children vertically.

        => px-6: Adds left and right padding.

        => justify-between: Logo ---------------- Menu


    
    const Navbar = () => {
        return (
            <nav className="h-20 rounded-3xl border border-zinc-800 flex items-center justify-between px-6">
                <h1 className="text-white text-xl font-semibold">
                    ShopX
                </h1>
            </nav>
        );
    };

    export default Navbar;



    const Navbar = () => {
        return (
            <nav className="h-20 rounded-3xl border border-zinc-800 flex items-center justify-between px-6">
      
                <h1 className="text-white text-xl font-semibold">
                    ShopX
                </h1>

                <ul className="flex gap-8 text-white">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Categories</li>
                    <li>Deals</li>
                    <li>Contact</li>
                </ul>

            </nav>
        );
    };

    export default Navbar;


=> Add a sign in button as thirs child in navbar. 

    <button className="text-white">
        Sign In
    </button>

    ShopX--------Home Shop Categories Deals Contact--------Sign In



=> Make the Navbar Look Like a Real Navbar

    Update your <ul>:

    <ul className="flex gap-8 text-zinc-400">
        <li className="cursor-pointer hover:text-white transition-colors">
            Home
        </li>

        <li className="cursor-pointer hover:text-white transition-colors">
            Shop
        </li>

        <li className="cursor-pointer hover:text-white transition-colors">
            Categories
        </li>

        <li className="cursor-pointer hover:text-white transition-colors">
            Deals
        </li>

        <li className="cursor-pointer hover:text-white transition-colors">
            Contact
        </li>
    </ul>


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------STEP 3-----------------------------------------------------------------------------

Step 13: Create the Hero Component

=>Create Folder
src
│
├── components
│   ├── Navbar
│   └── Hero
│       └── Hero.jsx


=> Import hero in App.jsx


=> Create the Hero Container

    const Hero = () => {
        return (
            <section className="mt-6 h-[500px] rounded-3xl border border-zinc-800">
                Hero Section
            </section>
        );
    };

    export default Hero;

    => mt-6: Adds space between Navbar and Hero.

    => h-[500px]: Temporary fixed height.

    => rounded-3xl: Large rounded corners like the design.

    => border border-zinc-800: Subtle dark border.



=> Split Hero into Left and Right Sections

-----------------------------------------
|                                       |
|   Left Content    |   Right Content   |
|                   |                   |
-----------------------------------------

    const Hero = () => {
        return (
            <section className="mt-6 h-[500px] rounded-3xl border border-zinc-800 p-8">
                <div className="flex h-full">

                    <div className="w-1/2 border border-red-500">
                        Left Content
                    </div>

                    <div className="w-1/2 border border-blue-500">
                        Right Content
                    </div>

                </div>
            </section>
        );
    };

    export default Hero;

    => flex: Places children side by side.

    => h-full: Makes the inner div take the full height of the hero container.

    => w-1/2: Each section gets 50% width.





















    <h1 className='text-white text-xl font-semibold'>
            ShopX
        </h1>
