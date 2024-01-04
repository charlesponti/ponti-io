const Price = ({ price, pricePer }: { price?: number; pricePer?: string }) => {
  return (
    <>
      {price ? (
        <>
          ${price}
          {pricePer ? (
            <span data-testid='price-per' className='text-gray-600 text-base'>
              /{pricePer}
            </span>
          ) : null}
        </>
      ) : (
        <span>Price upon consultation</span>
      )}
    </>
  );
};

export default Price;
