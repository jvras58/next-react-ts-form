import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Coluna de imagem */}
          <div className="bg-blue-900/30 p-8 flex items-center justify-center">
            <div className="relative w-full h-64 md:h-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GJbNbqXiSeeEOHdSbRghjyiUGVtpQO.png"
                alt="TypeScript Logo"
                fill
                style={{ objectFit: "contain" }}
                priority
                className="p-6"
              />
            </div>
          </div>

          {/* Coluna de conteúdo */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-4">
              React TS Forms
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Simplifique seus formulários com tipagem TypeScript avançada, 
              validação Zod e React TS Form para simplificar o código clichê.
            </p>

            <div className="space-y-4 mt-4">
              <Link 
                href="/contact" 
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all transform hover:translate-y-[-2px]"
              >
                Ver exemplo <ArrowRight size={18} />
              </Link>
              
              <Link 
                href="https://react-ts-form.com/lander" 
                className="flex items-center justify-center gap-2 w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentação oficial
              </Link>
            </div>

            <div className="mt-8 text-sm text-gray-400">
              <p>
                Desenvolvido com Next.js 15, Turbopack e Shadcn UI
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}