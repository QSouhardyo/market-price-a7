import Link from "next/link";

const ProductCard = ({ product }) => {
    const isUp = product.change.pct > 0;
    // console.log(product.id);

    return (
        <Link href={`/product/${product.id}`}>
            <div className="group rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-green-200 hover:shadow-lg sm:p-5">

                {/* Product Icon */}
                <div className="flex items-center gap-2 ">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-3xl">
                        {product.image}
                    </div>
                    {/* Product Name */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-800">
                            {product.nameBn}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                            প্রতি {product.unit}
                        </p>
                    </div>

                </div>



                {/* Price */}
                <div className="mt-5 flex justify-between items-center border-t border-gray-100 pt-4">
                    <div>
                        <p className="text-xs text-gray-500">
                            আজকের দাম
                        </p>

                        <div className="mt-1 flex items-baseline gap-1">
                            <span className="text-2xl font-extrabold text-green-800">
                                ৳{product.today.toLocaleString("bn-BD")}
                            </span>

                            <span className="text-sm text-gray-500">
                                /{product.unit}
                            </span>
                        </div>
                    </div>
                    <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${isUp
                            ? "bg-red-50 text-red-600"
                            : product.change.pct < 0
                                ? "bg-green-50 text-green-700"
                                : "bg-gray-100 text-gray-500"
                            }`}
                    >
                        {isUp
                            ? "▲"
                            : product.change.pct < 0
                                ? "▼"
                                : "—"}{" "}
                        {(product.change.pct.toLocaleString("bn-BD"))}%
                    </span>
                </div>


            </div>
        </Link>
    );
};

export default ProductCard;
