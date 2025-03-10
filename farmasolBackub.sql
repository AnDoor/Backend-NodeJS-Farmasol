PGDMP  .    
        	        }            farmasol    17.4    17.4 �    b           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            c           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            d           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            e           1262    32863    farmasol    DATABASE     n   CREATE DATABASE farmasol WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'es-MX';
    DROP DATABASE farmasol;
                     postgres    false            �            1259    32988    accion_t    TABLE     �   CREATE TABLE public.accion_t (
    id integer NOT NULL,
    nombre character varying(50),
    descripcion character varying(100)
);
    DROP TABLE public.accion_t;
       public         heap r       postgres    false            �            1259    32987    accion_t_id_seq    SEQUENCE     �   CREATE SEQUENCE public.accion_t_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.accion_t_id_seq;
       public               postgres    false    236            f           0    0    accion_t_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.accion_t_id_seq OWNED BY public.accion_t.id;
          public               postgres    false    235            �            1259    32889    cargo    TABLE     �   CREATE TABLE public.cargo (
    idcargo integer NOT NULL,
    nombre character varying(50) NOT NULL,
    descripcion character varying(100) NOT NULL
);
    DROP TABLE public.cargo;
       public         heap r       postgres    false            �            1259    32888    cargo_idcargo_seq    SEQUENCE     �   CREATE SEQUENCE public.cargo_idcargo_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.cargo_idcargo_seq;
       public               postgres    false    223            g           0    0    cargo_idcargo_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.cargo_idcargo_seq OWNED BY public.cargo.idcargo;
          public               postgres    false    222            �            1259    32865    ciudad    TABLE     �   CREATE TABLE public.ciudad (
    idciudad integer NOT NULL,
    nombre character varying(100),
    direccion character varying(100),
    calle character varying(100)
);
    DROP TABLE public.ciudad;
       public         heap r       postgres    false            �            1259    32864    ciudad_idciudad_seq    SEQUENCE     �   CREATE SEQUENCE public.ciudad_idciudad_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.ciudad_idciudad_seq;
       public               postgres    false    218            h           0    0    ciudad_idciudad_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.ciudad_idciudad_seq OWNED BY public.ciudad.idciudad;
          public               postgres    false    217            �            1259    33097    compra    TABLE     �   CREATE TABLE public.compra (
    id integer NOT NULL,
    pedido integer,
    fecha date,
    formapago character varying(50)
);
    DROP TABLE public.compra;
       public         heap r       postgres    false            �            1259    33096    compra_id_seq    SEQUENCE     �   CREATE SEQUENCE public.compra_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.compra_id_seq;
       public               postgres    false    247            i           0    0    compra_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.compra_id_seq OWNED BY public.compra.id;
          public               postgres    false    246            �            1259    33080    cuentas_pagar    TABLE     �   CREATE TABLE public.cuentas_pagar (
    id integer NOT NULL,
    pedido integer NOT NULL,
    sucursal integer NOT NULL,
    fecha_vencimiento date
);
 !   DROP TABLE public.cuentas_pagar;
       public         heap r       postgres    false            �            1259    33079    cuentas_pagar_id_seq    SEQUENCE     �   CREATE SEQUENCE public.cuentas_pagar_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.cuentas_pagar_id_seq;
       public               postgres    false    245            j           0    0    cuentas_pagar_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.cuentas_pagar_id_seq OWNED BY public.cuentas_pagar.id;
          public               postgres    false    244            �            1259    32883    empleado    TABLE       CREATE TABLE public.empleado (
    idempleado integer NOT NULL,
    nombre character varying(100) NOT NULL,
    apellido character varying(100) NOT NULL,
    telefono character varying(16),
    direccion character varying(100) NOT NULL,
    email character varying(100)
);
    DROP TABLE public.empleado;
       public         heap r       postgres    false            �            1259    32908    empleado_cargo    TABLE     i   CREATE TABLE public.empleado_cargo (
    id integer NOT NULL,
    empleado integer,
    cargo integer
);
 "   DROP TABLE public.empleado_cargo;
       public         heap r       postgres    false            �            1259    32907    empleado_cargo_id_seq    SEQUENCE     �   CREATE SEQUENCE public.empleado_cargo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.empleado_cargo_id_seq;
       public               postgres    false    228            k           0    0    empleado_cargo_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.empleado_cargo_id_seq OWNED BY public.empleado_cargo.id;
          public               postgres    false    227            �            1259    32925    empleado_reporte_sucursal    TABLE     �   CREATE TABLE public.empleado_reporte_sucursal (
    code integer NOT NULL,
    sucursal integer,
    empleado integer,
    fecha_inicio date,
    fecha_fin date
);
 -   DROP TABLE public.empleado_reporte_sucursal;
       public         heap r       postgres    false            �            1259    32924 "   empleado_reporte_sucursal_code_seq    SEQUENCE     �   CREATE SEQUENCE public.empleado_reporte_sucursal_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 9   DROP SEQUENCE public.empleado_reporte_sucursal_code_seq;
       public               postgres    false    230            l           0    0 "   empleado_reporte_sucursal_code_seq    SEQUENCE OWNED BY     i   ALTER SEQUENCE public.empleado_reporte_sucursal_code_seq OWNED BY public.empleado_reporte_sucursal.code;
          public               postgres    false    229            �            1259    33011    laboratorio    TABLE     �   CREATE TABLE public.laboratorio (
    rif character varying(20) NOT NULL,
    nombre character varying(50) NOT NULL,
    direccion character varying(50) NOT NULL,
    telefono character varying(16) NOT NULL,
    email character varying(50)
);
    DROP TABLE public.laboratorio;
       public         heap r       postgres    false            �            1259    33017    laboratorio_medicamento    TABLE     �   CREATE TABLE public.laboratorio_medicamento (
    id integer NOT NULL,
    medicamento character varying(50),
    laboratorio character varying(20),
    stock integer
);
 +   DROP TABLE public.laboratorio_medicamento;
       public         heap r       postgres    false            �            1259    33016    laboratorio_medicamento_id_seq    SEQUENCE     �   CREATE SEQUENCE public.laboratorio_medicamento_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 5   DROP SEQUENCE public.laboratorio_medicamento_id_seq;
       public               postgres    false    241            m           0    0    laboratorio_medicamento_id_seq    SEQUENCE OWNED BY     a   ALTER SEQUENCE public.laboratorio_medicamento_id_seq OWNED BY public.laboratorio_medicamento.id;
          public               postgres    false    240            �            1259    32895    medicamento    TABLE     �   CREATE TABLE public.medicamento (
    code character varying(50) NOT NULL,
    nombre character varying(50) NOT NULL,
    presentacion character varying(100) NOT NULL,
    precio numeric(3,2)
);
    DROP TABLE public.medicamento;
       public         heap r       postgres    false            �            1259    32995    medicamento_accion    TABLE     �   CREATE TABLE public.medicamento_accion (
    id integer NOT NULL,
    accionterapeutica integer,
    medicamento character varying(50)
);
 &   DROP TABLE public.medicamento_accion;
       public         heap r       postgres    false            �            1259    32994    medicamento_accion_id_seq    SEQUENCE     �   CREATE SEQUENCE public.medicamento_accion_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.medicamento_accion_id_seq;
       public               postgres    false    238            n           0    0    medicamento_accion_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.medicamento_accion_id_seq OWNED BY public.medicamento_accion.id;
          public               postgres    false    237            �            1259    32971    medicamento_mono    TABLE     �   CREATE TABLE public.medicamento_mono (
    id integer NOT NULL,
    medicamento character varying(50),
    monodroga integer
);
 $   DROP TABLE public.medicamento_mono;
       public         heap r       postgres    false            �            1259    32970    medicamento_mono_id_seq    SEQUENCE     �   CREATE SEQUENCE public.medicamento_mono_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.medicamento_mono_id_seq;
       public               postgres    false    234            o           0    0    medicamento_mono_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.medicamento_mono_id_seq OWNED BY public.medicamento_mono.id;
          public               postgres    false    233            �            1259    32954    medicamentostocks    TABLE     �   CREATE TABLE public.medicamentostocks (
    code integer NOT NULL,
    sucursal integer,
    medicamento character varying(50),
    stock integer
);
 %   DROP TABLE public.medicamentostocks;
       public         heap r       postgres    false            �            1259    32953    medicamentostocks_code_seq    SEQUENCE     �   CREATE SEQUENCE public.medicamentostocks_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.medicamentostocks_code_seq;
       public               postgres    false    232            p           0    0    medicamentostocks_code_seq    SEQUENCE OWNED BY     Y   ALTER SEQUENCE public.medicamentostocks_code_seq OWNED BY public.medicamentostocks.code;
          public               postgres    false    231            �            1259    32901 	   monodroga    TABLE     �   CREATE TABLE public.monodroga (
    code integer NOT NULL,
    nombre character varying(50),
    descripcion character varying(100)
);
    DROP TABLE public.monodroga;
       public         heap r       postgres    false            �            1259    32900    monodroga_code_seq    SEQUENCE     �   CREATE SEQUENCE public.monodroga_code_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 )   DROP SEQUENCE public.monodroga_code_seq;
       public               postgres    false    226            q           0    0    monodroga_code_seq    SEQUENCE OWNED BY     I   ALTER SEQUENCE public.monodroga_code_seq OWNED BY public.monodroga.code;
          public               postgres    false    225            �            1259    33044    pedido    TABLE     �   CREATE TABLE public.pedido (
    id integer NOT NULL,
    fecha date NOT NULL,
    estado character varying(50) NOT NULL,
    empleado_id integer,
    monto numeric(10,2)
);
    DROP TABLE public.pedido;
       public         heap r       postgres    false            �            1259    33043    pedido_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pedido_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.pedido_id_seq;
       public               postgres    false    243            r           0    0    pedido_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.pedido_id_seq OWNED BY public.pedido.id;
          public               postgres    false    242            �            1259    32872    sucursal    TABLE     V   CREATE TABLE public.sucursal (
    idsucursal integer NOT NULL,
    ciudad integer
);
    DROP TABLE public.sucursal;
       public         heap r       postgres    false            �            1259    32871    sucursal_idsucursal_seq    SEQUENCE     �   CREATE SEQUENCE public.sucursal_idsucursal_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.sucursal_idsucursal_seq;
       public               postgres    false    220            s           0    0    sucursal_idsucursal_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.sucursal_idsucursal_seq OWNED BY public.sucursal.idsucursal;
          public               postgres    false    219            v           2604    32991    accion_t id    DEFAULT     j   ALTER TABLE ONLY public.accion_t ALTER COLUMN id SET DEFAULT nextval('public.accion_t_id_seq'::regclass);
 :   ALTER TABLE public.accion_t ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    235    236    236            p           2604    32892    cargo idcargo    DEFAULT     n   ALTER TABLE ONLY public.cargo ALTER COLUMN idcargo SET DEFAULT nextval('public.cargo_idcargo_seq'::regclass);
 <   ALTER TABLE public.cargo ALTER COLUMN idcargo DROP DEFAULT;
       public               postgres    false    222    223    223            n           2604    32868    ciudad idciudad    DEFAULT     r   ALTER TABLE ONLY public.ciudad ALTER COLUMN idciudad SET DEFAULT nextval('public.ciudad_idciudad_seq'::regclass);
 >   ALTER TABLE public.ciudad ALTER COLUMN idciudad DROP DEFAULT;
       public               postgres    false    217    218    218            {           2604    33100 	   compra id    DEFAULT     f   ALTER TABLE ONLY public.compra ALTER COLUMN id SET DEFAULT nextval('public.compra_id_seq'::regclass);
 8   ALTER TABLE public.compra ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    247    246    247            z           2604    33083    cuentas_pagar id    DEFAULT     t   ALTER TABLE ONLY public.cuentas_pagar ALTER COLUMN id SET DEFAULT nextval('public.cuentas_pagar_id_seq'::regclass);
 ?   ALTER TABLE public.cuentas_pagar ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    245    244    245            r           2604    32911    empleado_cargo id    DEFAULT     v   ALTER TABLE ONLY public.empleado_cargo ALTER COLUMN id SET DEFAULT nextval('public.empleado_cargo_id_seq'::regclass);
 @   ALTER TABLE public.empleado_cargo ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    227    228    228            s           2604    32928    empleado_reporte_sucursal code    DEFAULT     �   ALTER TABLE ONLY public.empleado_reporte_sucursal ALTER COLUMN code SET DEFAULT nextval('public.empleado_reporte_sucursal_code_seq'::regclass);
 M   ALTER TABLE public.empleado_reporte_sucursal ALTER COLUMN code DROP DEFAULT;
       public               postgres    false    229    230    230            x           2604    33020    laboratorio_medicamento id    DEFAULT     �   ALTER TABLE ONLY public.laboratorio_medicamento ALTER COLUMN id SET DEFAULT nextval('public.laboratorio_medicamento_id_seq'::regclass);
 I   ALTER TABLE public.laboratorio_medicamento ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    241    240    241            w           2604    32998    medicamento_accion id    DEFAULT     ~   ALTER TABLE ONLY public.medicamento_accion ALTER COLUMN id SET DEFAULT nextval('public.medicamento_accion_id_seq'::regclass);
 D   ALTER TABLE public.medicamento_accion ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    237    238    238            u           2604    32974    medicamento_mono id    DEFAULT     z   ALTER TABLE ONLY public.medicamento_mono ALTER COLUMN id SET DEFAULT nextval('public.medicamento_mono_id_seq'::regclass);
 B   ALTER TABLE public.medicamento_mono ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    233    234    234            t           2604    32957    medicamentostocks code    DEFAULT     �   ALTER TABLE ONLY public.medicamentostocks ALTER COLUMN code SET DEFAULT nextval('public.medicamentostocks_code_seq'::regclass);
 E   ALTER TABLE public.medicamentostocks ALTER COLUMN code DROP DEFAULT;
       public               postgres    false    232    231    232            q           2604    32904    monodroga code    DEFAULT     p   ALTER TABLE ONLY public.monodroga ALTER COLUMN code SET DEFAULT nextval('public.monodroga_code_seq'::regclass);
 =   ALTER TABLE public.monodroga ALTER COLUMN code DROP DEFAULT;
       public               postgres    false    225    226    226            y           2604    33047 	   pedido id    DEFAULT     f   ALTER TABLE ONLY public.pedido ALTER COLUMN id SET DEFAULT nextval('public.pedido_id_seq'::regclass);
 8   ALTER TABLE public.pedido ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    243    242    243            o           2604    32875    sucursal idsucursal    DEFAULT     z   ALTER TABLE ONLY public.sucursal ALTER COLUMN idsucursal SET DEFAULT nextval('public.sucursal_idsucursal_seq'::regclass);
 B   ALTER TABLE public.sucursal ALTER COLUMN idsucursal DROP DEFAULT;
       public               postgres    false    219    220    220            T          0    32988    accion_t 
   TABLE DATA           ;   COPY public.accion_t (id, nombre, descripcion) FROM stdin;
    public               postgres    false    236   ��       G          0    32889    cargo 
   TABLE DATA           =   COPY public.cargo (idcargo, nombre, descripcion) FROM stdin;
    public               postgres    false    223    �       B          0    32865    ciudad 
   TABLE DATA           D   COPY public.ciudad (idciudad, nombre, direccion, calle) FROM stdin;
    public               postgres    false    218   2�       _          0    33097    compra 
   TABLE DATA           >   COPY public.compra (id, pedido, fecha, formapago) FROM stdin;
    public               postgres    false    247   .�       ]          0    33080    cuentas_pagar 
   TABLE DATA           P   COPY public.cuentas_pagar (id, pedido, sucursal, fecha_vencimiento) FROM stdin;
    public               postgres    false    245   ��       E          0    32883    empleado 
   TABLE DATA           \   COPY public.empleado (idempleado, nombre, apellido, telefono, direccion, email) FROM stdin;
    public               postgres    false    221   Ƞ       L          0    32908    empleado_cargo 
   TABLE DATA           =   COPY public.empleado_cargo (id, empleado, cargo) FROM stdin;
    public               postgres    false    228   	�       N          0    32925    empleado_reporte_sucursal 
   TABLE DATA           f   COPY public.empleado_reporte_sucursal (code, sucursal, empleado, fecha_inicio, fecha_fin) FROM stdin;
    public               postgres    false    230   R�       W          0    33011    laboratorio 
   TABLE DATA           N   COPY public.laboratorio (rif, nombre, direccion, telefono, email) FROM stdin;
    public               postgres    false    239   o�       Y          0    33017    laboratorio_medicamento 
   TABLE DATA           V   COPY public.laboratorio_medicamento (id, medicamento, laboratorio, stock) FROM stdin;
    public               postgres    false    241   �       H          0    32895    medicamento 
   TABLE DATA           I   COPY public.medicamento (code, nombre, presentacion, precio) FROM stdin;
    public               postgres    false    224   C�       V          0    32995    medicamento_accion 
   TABLE DATA           P   COPY public.medicamento_accion (id, accionterapeutica, medicamento) FROM stdin;
    public               postgres    false    238   ��       R          0    32971    medicamento_mono 
   TABLE DATA           F   COPY public.medicamento_mono (id, medicamento, monodroga) FROM stdin;
    public               postgres    false    234   )�       P          0    32954    medicamentostocks 
   TABLE DATA           O   COPY public.medicamentostocks (code, sucursal, medicamento, stock) FROM stdin;
    public               postgres    false    232   [�       J          0    32901 	   monodroga 
   TABLE DATA           >   COPY public.monodroga (code, nombre, descripcion) FROM stdin;
    public               postgres    false    226   ��       [          0    33044    pedido 
   TABLE DATA           G   COPY public.pedido (id, fecha, estado, empleado_id, monto) FROM stdin;
    public               postgres    false    243   �       D          0    32872    sucursal 
   TABLE DATA           6   COPY public.sucursal (idsucursal, ciudad) FROM stdin;
    public               postgres    false    220   m�       t           0    0    accion_t_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.accion_t_id_seq', 7, true);
          public               postgres    false    235            u           0    0    cargo_idcargo_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.cargo_idcargo_seq', 7, true);
          public               postgres    false    222            v           0    0    ciudad_idciudad_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.ciudad_idciudad_seq', 9, true);
          public               postgres    false    217            w           0    0    compra_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.compra_id_seq', 5, true);
          public               postgres    false    246            x           0    0    cuentas_pagar_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.cuentas_pagar_id_seq', 6, true);
          public               postgres    false    244            y           0    0    empleado_cargo_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.empleado_cargo_id_seq', 7, true);
          public               postgres    false    227            z           0    0 "   empleado_reporte_sucursal_code_seq    SEQUENCE SET     Q   SELECT pg_catalog.setval('public.empleado_reporte_sucursal_code_seq', 1, false);
          public               postgres    false    229            {           0    0    laboratorio_medicamento_id_seq    SEQUENCE SET     L   SELECT pg_catalog.setval('public.laboratorio_medicamento_id_seq', 8, true);
          public               postgres    false    240            |           0    0    medicamento_accion_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.medicamento_accion_id_seq', 7, true);
          public               postgres    false    237            }           0    0    medicamento_mono_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.medicamento_mono_id_seq', 16, true);
          public               postgres    false    233            ~           0    0    medicamentostocks_code_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.medicamentostocks_code_seq', 12, true);
          public               postgres    false    231                       0    0    monodroga_code_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.monodroga_code_seq', 11, true);
          public               postgres    false    225            �           0    0    pedido_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.pedido_id_seq', 6, true);
          public               postgres    false    242            �           0    0    sucursal_idsucursal_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.sucursal_idsucursal_seq', 5, true);
          public               postgres    false    219            �           2606    32993    accion_t accion_t_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.accion_t
    ADD CONSTRAINT accion_t_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.accion_t DROP CONSTRAINT accion_t_pkey;
       public                 postgres    false    236            �           2606    32894    cargo cargo_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.cargo
    ADD CONSTRAINT cargo_pkey PRIMARY KEY (idcargo);
 :   ALTER TABLE ONLY public.cargo DROP CONSTRAINT cargo_pkey;
       public                 postgres    false    223            }           2606    32870    ciudad ciudad_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.ciudad
    ADD CONSTRAINT ciudad_pkey PRIMARY KEY (idciudad);
 <   ALTER TABLE ONLY public.ciudad DROP CONSTRAINT ciudad_pkey;
       public                 postgres    false    218            �           2606    33102    compra compra_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.compra
    ADD CONSTRAINT compra_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.compra DROP CONSTRAINT compra_pkey;
       public                 postgres    false    247            �           2606    33085     cuentas_pagar cuentas_pagar_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.cuentas_pagar
    ADD CONSTRAINT cuentas_pagar_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.cuentas_pagar DROP CONSTRAINT cuentas_pagar_pkey;
       public                 postgres    false    245            �           2606    32913 "   empleado_cargo empleado_cargo_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.empleado_cargo
    ADD CONSTRAINT empleado_cargo_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.empleado_cargo DROP CONSTRAINT empleado_cargo_pkey;
       public                 postgres    false    228            �           2606    32887    empleado empleado_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.empleado
    ADD CONSTRAINT empleado_pkey PRIMARY KEY (idempleado);
 @   ALTER TABLE ONLY public.empleado DROP CONSTRAINT empleado_pkey;
       public                 postgres    false    221            �           2606    32930 8   empleado_reporte_sucursal empleado_reporte_sucursal_pkey 
   CONSTRAINT     x   ALTER TABLE ONLY public.empleado_reporte_sucursal
    ADD CONSTRAINT empleado_reporte_sucursal_pkey PRIMARY KEY (code);
 b   ALTER TABLE ONLY public.empleado_reporte_sucursal DROP CONSTRAINT empleado_reporte_sucursal_pkey;
       public                 postgres    false    230            �           2606    33022 4   laboratorio_medicamento laboratorio_medicamento_pkey 
   CONSTRAINT     r   ALTER TABLE ONLY public.laboratorio_medicamento
    ADD CONSTRAINT laboratorio_medicamento_pkey PRIMARY KEY (id);
 ^   ALTER TABLE ONLY public.laboratorio_medicamento DROP CONSTRAINT laboratorio_medicamento_pkey;
       public                 postgres    false    241            �           2606    33015    laboratorio laboratorio_pkey 
   CONSTRAINT     [   ALTER TABLE ONLY public.laboratorio
    ADD CONSTRAINT laboratorio_pkey PRIMARY KEY (rif);
 F   ALTER TABLE ONLY public.laboratorio DROP CONSTRAINT laboratorio_pkey;
       public                 postgres    false    239            �           2606    33000 *   medicamento_accion medicamento_accion_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.medicamento_accion
    ADD CONSTRAINT medicamento_accion_pkey PRIMARY KEY (id);
 T   ALTER TABLE ONLY public.medicamento_accion DROP CONSTRAINT medicamento_accion_pkey;
       public                 postgres    false    238            �           2606    32976 &   medicamento_mono medicamento_mono_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.medicamento_mono
    ADD CONSTRAINT medicamento_mono_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.medicamento_mono DROP CONSTRAINT medicamento_mono_pkey;
       public                 postgres    false    234            �           2606    32899    medicamento medicamento_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.medicamento
    ADD CONSTRAINT medicamento_pkey PRIMARY KEY (code);
 F   ALTER TABLE ONLY public.medicamento DROP CONSTRAINT medicamento_pkey;
       public                 postgres    false    224            �           2606    32959 (   medicamentostocks medicamentostocks_pkey 
   CONSTRAINT     h   ALTER TABLE ONLY public.medicamentostocks
    ADD CONSTRAINT medicamentostocks_pkey PRIMARY KEY (code);
 R   ALTER TABLE ONLY public.medicamentostocks DROP CONSTRAINT medicamentostocks_pkey;
       public                 postgres    false    232            �           2606    32906    monodroga monodroga_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.monodroga
    ADD CONSTRAINT monodroga_pkey PRIMARY KEY (code);
 B   ALTER TABLE ONLY public.monodroga DROP CONSTRAINT monodroga_pkey;
       public                 postgres    false    226            �           2606    33049    pedido pedido_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pedido_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pedido_pkey;
       public                 postgres    false    243                       2606    32877    sucursal sucursal_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.sucursal
    ADD CONSTRAINT sucursal_pkey PRIMARY KEY (idsucursal);
 @   ALTER TABLE ONLY public.sucursal DROP CONSTRAINT sucursal_pkey;
       public                 postgres    false    220            �           2606    33103    compra compra_pedido_fkey    FK CONSTRAINT     x   ALTER TABLE ONLY public.compra
    ADD CONSTRAINT compra_pedido_fkey FOREIGN KEY (pedido) REFERENCES public.pedido(id);
 C   ALTER TABLE ONLY public.compra DROP CONSTRAINT compra_pedido_fkey;
       public               postgres    false    4761    243    247            �           2606    33086 '   cuentas_pagar cuentas_pagar_pedido_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cuentas_pagar
    ADD CONSTRAINT cuentas_pagar_pedido_fkey FOREIGN KEY (pedido) REFERENCES public.pedido(id);
 Q   ALTER TABLE ONLY public.cuentas_pagar DROP CONSTRAINT cuentas_pagar_pedido_fkey;
       public               postgres    false    245    243    4761            �           2606    33091 )   cuentas_pagar cuentas_pagar_sucursal_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.cuentas_pagar
    ADD CONSTRAINT cuentas_pagar_sucursal_fkey FOREIGN KEY (sucursal) REFERENCES public.sucursal(idsucursal);
 S   ALTER TABLE ONLY public.cuentas_pagar DROP CONSTRAINT cuentas_pagar_sucursal_fkey;
       public               postgres    false    220    245    4735            �           2606    32919 (   empleado_cargo empleado_cargo_cargo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.empleado_cargo
    ADD CONSTRAINT empleado_cargo_cargo_fkey FOREIGN KEY (cargo) REFERENCES public.cargo(idcargo);
 R   ALTER TABLE ONLY public.empleado_cargo DROP CONSTRAINT empleado_cargo_cargo_fkey;
       public               postgres    false    4739    223    228            �           2606    32914 +   empleado_cargo empleado_cargo_empleado_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.empleado_cargo
    ADD CONSTRAINT empleado_cargo_empleado_fkey FOREIGN KEY (empleado) REFERENCES public.empleado(idempleado);
 U   ALTER TABLE ONLY public.empleado_cargo DROP CONSTRAINT empleado_cargo_empleado_fkey;
       public               postgres    false    221    228    4737            �           2606    32936 A   empleado_reporte_sucursal empleado_reporte_sucursal_empleado_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.empleado_reporte_sucursal
    ADD CONSTRAINT empleado_reporte_sucursal_empleado_fkey FOREIGN KEY (empleado) REFERENCES public.empleado(idempleado);
 k   ALTER TABLE ONLY public.empleado_reporte_sucursal DROP CONSTRAINT empleado_reporte_sucursal_empleado_fkey;
       public               postgres    false    221    4737    230            �           2606    32931 A   empleado_reporte_sucursal empleado_reporte_sucursal_sucursal_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.empleado_reporte_sucursal
    ADD CONSTRAINT empleado_reporte_sucursal_sucursal_fkey FOREIGN KEY (sucursal) REFERENCES public.sucursal(idsucursal);
 k   ALTER TABLE ONLY public.empleado_reporte_sucursal DROP CONSTRAINT empleado_reporte_sucursal_sucursal_fkey;
       public               postgres    false    230    220    4735            �           2606    33038 '   medicamento_accion fk_accionterapeutica    FK CONSTRAINT     �   ALTER TABLE ONLY public.medicamento_accion
    ADD CONSTRAINT fk_accionterapeutica FOREIGN KEY (accionterapeutica) REFERENCES public.accion_t(id) ON DELETE CASCADE;
 Q   ALTER TABLE ONLY public.medicamento_accion DROP CONSTRAINT fk_accionterapeutica;
       public               postgres    false    238    4753    236            �           2606    33033 !   medicamento_accion fk_medicamento    FK CONSTRAINT     �   ALTER TABLE ONLY public.medicamento_accion
    ADD CONSTRAINT fk_medicamento FOREIGN KEY (medicamento) REFERENCES public.medicamento(code) ON DELETE CASCADE;
 K   ALTER TABLE ONLY public.medicamento_accion DROP CONSTRAINT fk_medicamento;
       public               postgres    false    224    4741    238            �           2606    33028 @   laboratorio_medicamento laboratorio_medicamento_laboratorio_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.laboratorio_medicamento
    ADD CONSTRAINT laboratorio_medicamento_laboratorio_fkey FOREIGN KEY (laboratorio) REFERENCES public.laboratorio(rif);
 j   ALTER TABLE ONLY public.laboratorio_medicamento DROP CONSTRAINT laboratorio_medicamento_laboratorio_fkey;
       public               postgres    false    239    4757    241            �           2606    33023 @   laboratorio_medicamento laboratorio_medicamento_medicamento_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.laboratorio_medicamento
    ADD CONSTRAINT laboratorio_medicamento_medicamento_fkey FOREIGN KEY (medicamento) REFERENCES public.medicamento(code);
 j   ALTER TABLE ONLY public.laboratorio_medicamento DROP CONSTRAINT laboratorio_medicamento_medicamento_fkey;
       public               postgres    false    4741    224    241            �           2606    33006 <   medicamento_accion medicamento_accion_accionterapeutica_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.medicamento_accion
    ADD CONSTRAINT medicamento_accion_accionterapeutica_fkey FOREIGN KEY (accionterapeutica) REFERENCES public.accion_t(id);
 f   ALTER TABLE ONLY public.medicamento_accion DROP CONSTRAINT medicamento_accion_accionterapeutica_fkey;
       public               postgres    false    238    4753    236            �           2606    32977 2   medicamento_mono medicamento_mono_medicamento_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.medicamento_mono
    ADD CONSTRAINT medicamento_mono_medicamento_fkey FOREIGN KEY (medicamento) REFERENCES public.medicamento(code);
 \   ALTER TABLE ONLY public.medicamento_mono DROP CONSTRAINT medicamento_mono_medicamento_fkey;
       public               postgres    false    224    4741    234            �           2606    32982 0   medicamento_mono medicamento_mono_monodroga_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.medicamento_mono
    ADD CONSTRAINT medicamento_mono_monodroga_fkey FOREIGN KEY (monodroga) REFERENCES public.monodroga(code);
 Z   ALTER TABLE ONLY public.medicamento_mono DROP CONSTRAINT medicamento_mono_monodroga_fkey;
       public               postgres    false    234    4743    226            �           2606    32965 4   medicamentostocks medicamentostocks_medicamento_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.medicamentostocks
    ADD CONSTRAINT medicamentostocks_medicamento_fkey FOREIGN KEY (medicamento) REFERENCES public.medicamento(code);
 ^   ALTER TABLE ONLY public.medicamentostocks DROP CONSTRAINT medicamentostocks_medicamento_fkey;
       public               postgres    false    232    224    4741            �           2606    32960 1   medicamentostocks medicamentostocks_sucursal_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.medicamentostocks
    ADD CONSTRAINT medicamentostocks_sucursal_fkey FOREIGN KEY (sucursal) REFERENCES public.sucursal(idsucursal);
 [   ALTER TABLE ONLY public.medicamentostocks DROP CONSTRAINT medicamentostocks_sucursal_fkey;
       public               postgres    false    232    220    4735            �           2606    33050    pedido pedido_empleado_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.pedido
    ADD CONSTRAINT pedido_empleado_id_fkey FOREIGN KEY (empleado_id) REFERENCES public.empleado(idempleado);
 H   ALTER TABLE ONLY public.pedido DROP CONSTRAINT pedido_empleado_id_fkey;
       public               postgres    false    221    4737    243            �           2606    32878    sucursal sucursal_ciudad_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.sucursal
    ADD CONSTRAINT sucursal_ciudad_fkey FOREIGN KEY (ciudad) REFERENCES public.ciudad(idciudad);
 G   ALTER TABLE ONLY public.sucursal DROP CONSTRAINT sucursal_ciudad_fkey;
       public               postgres    false    220    218    4733            T   �   x�m̻�@E�x�
U��O.�HdY�fv�a%���ʰ�o�ݳK���^
Vkb�ģV�0�O�ǉ
��F2����-�B�Y0��א�Ĕ��&��]>l�M<��O��`�� s��Vp��X�]e���O��]���lL�      G     x��P;N1����	V�w�JjDM�b�H���ވPq����(���j��x������#'����A�&9�=�XO����o���vO���3uP�}F�p�q�6�e�z��;1�T���]��fҍ�!���!RjҹQ�JA侰օ>�8ܘi~��(��v5S�#,�����$�fn�*T�lj�=����r>9͠𗙬�����'�*U��B���;3%m�t/1\6�(I�h��}�1�Ŭ~�,����]����
O�0����      B   �   x�mP1NA���pG�%DyI����1Ys���F��'B�;��)y
/a/�HCcy����c�K�d�2�~>>�d���#\SbXGx�/=a=���7�e����i�r5�ىb]U��9��(���u�����b	���R<�B��;O?����Û���	���Ky�ؑՈ3���U�=������P�8�l�\�:iGK�*v�_u����gv��+ж|
8u���id����i�      _   D   x�3�4�4202�54�5��)J�+NK-J�K�L�2�����p�d�e'r�r������� ���      ]   6   x�5ʱ�0���E�,G�K���]�\�Zey�Mo�ޟ,�Z�;B����%�      E   1  x�m�MN�0���SX��r;;B��P��X��2r~�6b�9صG�Q8	n�݌5z�ｙX�z��Z�����ӛw��
)&��"V�Tޘ�]�7,g��.!G��A�F����-��Q�U:��=�n�p���#X�^LϡDo����9ۚ�H֔�7��n��?��%уCRxW�a���B*�����]ݜL	:���bD�$���Ux�`���c���`V��[�C{o<RM'�fR��+2��]�c]����c��p.p�A?y��}1~�E�i`�.�$D�"ޟ��B����      L   9   x�%��� E���Š�N����$Ks#^��Y�������	%�H{]�C�k�      N      x������ � �      W   a   x���52�4�b]N��<����̜��b΂�Ԣ�|����*NmS �5� ����<��������\./]CC]#�1���LH-HE����� ��(q      Y   S   x�U���0��.A~'����^z	H���d���I����X����h6މ���q/2��%k/ѓ��a#�/��7����      H   �   x�E�M
�0����=ALcC�Rԅ`QХ�i��I�iģ�d&Zt7����z�f,�zl��Up�F�3d�1}A#ub��༽v��j|�0�Ȋ+)_6���w�J%�q�3A�/�q�Lh��)Z��z���o:O�-������G|�?��hU�3%���K=�      V   "   x�3�4���2�4Q&�& ʔ�D��qqq ]y]      R   "   x����uu100�4�D0 l#Ns�=... ���      P   >   x�5Ǳ�0����%[r��� а��$�}�A�Z�nR���V�z�H+��ֻI� �	      J   ,  x���MN1��3��Hh~�E�b$= Oⶖ�x�������(�g �R%XŲ�߳�\4KTtT0Jh�	����5�xL�GVk����C/0�`�GF
�%�ڀ��:V+�A�k/�~؎*+Jb��9�F,�,�(RaO�y�8�/����8�$>�j�Q�ؙG�)q0�t�'�8��#��G7�bQ�Nα$�0��殽nn�J������ۿ�? ɐMR$b�K{0���z��5��Fŝ�@�6��7������i�Y�<bt ބV�����3�J����}�ڶ�W-�
      [   x   x�3�4202�54�52�t�S():� �8�$��������̜3Ə��ʂ3(593)3%�������3 5/%35�$��������� a�9D�H�P���.p&r��b���� ��%�      D   !   x�3�4�2�4�2�4�2�4�2�4����� (@     