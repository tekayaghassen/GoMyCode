PROCEDURE dot_product(v1,v2 : ARRAY_OF INTEGER, VAR dot : INTEGER)
VAR
    i : INTEGER;
BEGIN
    dot :=0
    i:=0
    IF (v1.length <> v2.length) THEN
        Write("different size of vectors")
        dot := NaN
    END_IF
    WHILE (i <v1.length ) DO
        dot := dot + v1[i]*v2[i]
    END_WHILE
END

ALGORITHM orth_vectors
VAR
    v1,v2 : ARRAY_OF INTEGER [50]
    dot : INTEGER
BEGIN
    n1 := read_size()
    
    read_array(n1,v1)
    
    n2 := read_size()
    
    read_array(n2,v2)
    dot_product(v1,v2,dot)
    IF (dot = 0) THEN
        Write("V1 and V2 are orthogonal")
    ELSE
        Write("V1 and V2 are not orthogonal")
    END_IF
END


FUNCTION dot_product(v1,v2 : ARRAY_OF INTEGER) : INTEGER
VAR
    i, dot : INTEGER
BEGIN
    dot :=0
    i:=0
    IF (v1.length <> v2.length) THEN
        Write("vectors with different sizes we cannot calculat dot product");
        RETURN NaN; // NaN : not definte number
    END_IF
    WHILE (i <v1.length ) DO
        dot := dot + v1[i]*v2[i]
    END_WHILE
    RETURN dot 
END

ALGORITHM orth_vectors
VAR
    v1,v2 : ARRAY_OF INTEGER [50]
    dot : INTEGER
BEGIN

    n1 := read_size();

    read_array(n1,v1);

    n2 := read_size();

    read_array(n2,v2);
    dot := dot_product(v1,v2);
    IF (dot = 0) THEN
        Write("V1 and V2 are orthogonal")
    ELSE
        Write("V1 and V2 are not orthogonal")
    END_IF
END