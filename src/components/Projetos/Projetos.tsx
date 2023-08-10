export const Projetos = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] gap-2 mt-16 px-24">
      <h2 className="font-[metropolisregular] text-4xl">Meus Projetos</h2>
      <div className="grid grid-cols-1 grid-rows-3 gap-8 mt-4">
        <div className="w-[600px] h-[300px] shadow-[0_3px_3px_0_rgba(0,0,0,0.2)]">
          <a href="https://shopping-cart-psi-seven.vercel.app/" target="_blank">
            <img
              className="object-center object-cover rounded"
              srcSet="
                ../public/imagens/sc.png 600w,
                ../public/imagens/sc-s.png 300w
              "
            />
          </a>
        </div>
        <div className="w-[600px] h-[300px] shadow-[0_3px_3px_0_rgba(0,0,0,0.2)]">
          <a href="https://trees-lilac.vercel.app/" target="_blank">
            <img
              className="object-center object-cover rounded"
              srcSet="
                ../public/imagens/trees.png 600w,
                ../public/imagens/trees-s.png 300w
              "
            />
          </a>
        </div>
        <div className="w-[600px] h-[300px] shadow-[0_3px_3px_0_rgba(0,0,0,0.2)]">
          <a href="https://restaurant-page-eight.vercel.app/" target="_blank">
            <img
              className="object-center object-cover rounded"
              srcSet="
                ../public/imagens/rp.png 600w,
                ../public/imagens/rp-s.png 300w
              "
            />
          </a>
        </div>
      </div>
    </div>
  )
}