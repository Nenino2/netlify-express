exports.checkBody = (req, res, next) => {
    if (req.body && !req.body.ingredient) {
        return res.status(401).json({
            status: 'fail',
            message: 'invalid body'
        });
    }
    next();
};

exports.getIngredients = (req, res) => {
    res.status(200).json({
        status: 'success',
        data: {
            ingredients: ['pasta', 'tomatoes', 'salt']
        }
    });
};

exports.addIngredient = (req, res) => {
    const ingredient = req.body.ingredient;
    res.status(201).json({
        status: 'success',
        data: {
            ingredient
        }
    });
};
