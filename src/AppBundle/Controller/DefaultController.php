<?php

/*
 * This file is part of the Multi Symfony2 Project, produced by JoliCode.
 *
 * (c) Multi Symfony2 Example <lbrunet@jolicode.com>
 */

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        return $this->render('default/index.html.twig', ['base_dir' => realpath($this->getParameter('kernel.root_dir').'/..')]);
    }
}
