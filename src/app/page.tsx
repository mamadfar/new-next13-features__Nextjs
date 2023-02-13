import {Suspense} from "react";
import Link from "next/link";
import TodosList from "@/app/(user)/todos/TodosList";

export default function Home() {
    return (
        <>
            <div className="flex justify-center items-center mt-4">
                <Link href="/todos"
                      className="px-5 py-2 border border-red-300 rounded-md hover:bg-red-200 transition-colors mx-2">Todos</Link>
                <Link href="/search"
                      className="px-5 py-2 border border-red-300 rounded-md hover:bg-red-200 transition-colors mx-2">Search</Link>
            </div>
            <div>
                <Suspense fallback={<p className="text-red-500">Loading the Todos...</p>}>
                    <h1>Loading Todos</h1>
                    <div className="flex space-x-2">
                        {/*@ts-ignore*/}
                        <TodosList/>
                    </div>
                </Suspense>
                <Suspense fallback={<p className="text-blue-500">Loading the Trolley...</p>}>
                    <h1>Loading Shopping Trolley</h1>
                    <div className="flex space-x-2">
                        {/*@ts-ignore*/}
                        <TodosList/>
                    </div>
                </Suspense>
            </div>
        </>
    );
}
