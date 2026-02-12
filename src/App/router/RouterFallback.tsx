/* ========================================================================
                               RouterFallback              
======================================================================== */

export const RouterFallback = () => {
  const spinner = (
    <div
      aria-label='Loading'
      className='pointer-events-none fixed inset-0 flex items-center justify-center'
    >
      <div className='relative flex h-20 w-20'>
        <i className='absolute h-full w-full animate-[custom-spinner-spin_0.8s_ease_infinite] rounded-full border-[6px] border-solid border-t-transparent border-r-transparent border-b-violet-800 border-l-transparent'></i>
        <i className='absolute h-full w-full animate-[custom-spinner-spin_0.8s_linear_infinite] rounded-full border-[6px] border-dotted border-t-transparent border-r-transparent border-b-violet-800 border-l-transparent opacity-75'></i>
      </div>
    </div>
  )

  /* ======================
          return
  ====================== */

  return (
    <div className={`mx-auto flex w-full flex-1 flex-wrap`}>
      <div className='relative mx-auto w-full flex-1 p-6 2xl:container'>
        {spinner}
      </div>
    </div>
  )
}
