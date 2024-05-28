import pic from "./assets/me.jpg"

function Test() {
    return (
        <>
           <div className="flex gap-20 m-24">
                {/* image div */}
                <div>
                    <img className="w-44 border-8 border-green-700 rounded-xl" src={pic} alt="" />
                </div>

                {/* about me div */}
                <div className="w-1/3">
                    <h1 className="text-2xl font-bold my-4">Name: Md Abdullah Ibn Noor</h1>

                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis minima saepe vitae vel, eaque in commodi natus, inventore consequatur minus molestias sequi accusamus aspernatur, quae alias a quas illum?
                    </p>

                    <ul className="">
                        <li>Phone: 012333333</li>
                        <li>Email: email</li>
                    </ul>
                </div>
           </div>

        </>
    );
}

export default Test;
