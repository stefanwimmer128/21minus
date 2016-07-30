/*
 * Copyright (c) 2016, Stefan Wimmer
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */

/**
 * 21minus
 * @author Stefan Wimmer <stefanwimmer128@gmail.com>
 * @date 30.07.16
 */

$(() =>
{
    let number = 21;
    
    let won = null;
    
    const minus = (minus) =>
        () =>
        {
            number -= minus;
            
            if (number === 0)
                won = "You";
            
            update();
            
            aiMinus();
        };
    
    const update = () =>
    {
        if (number < 3)
            $("#minus3").attr("disabled", "disabled");
        if (number < 2)
            $("#minus2").attr("disabled", "disabled");
        
        if (number === 0)
            $(".minus").attr("disabled", "disabled");
        
        $("#number").text(number);
        
        if (won !== null)
            $("#won").text(won + " won!");
        else
            $("#won").empty();
    };
    
    const aiMinus = () =>
    {
        if (won)
            return ;
        
        $(".minus").attr("disabled", "disabled");
        
        setTimeout(() =>
        {
            if (number <= 3 || (number % 4 !== 0 && Math.random() <= 0.4))
                number -= number % 4;
            else
                number -= Math.ceil(Math.random() * 3);
            
            $(".minus").removeAttr("disabled");
            
            if (number === 0)
                won = "AI";
            
            update();
        }, 1e3);
    };
    
    const restart = () =>
    {
        number = 21;
        
        won = null;
        
        $(".minus").removeAttr("disabled");
        
        update();
    };
    
    $("#minus1").click(minus(1));
    $("#minus2").click(minus(2));
    $("#minus3").click(minus(3));
    
    $("#restart").click(restart);
    
    update();
});
